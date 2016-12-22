import {
  Component, OnInit, ViewContainerRef, ViewChild, ApplicationRef,
  OnDestroy, ElementRef, Renderer, NgZone
} from '@angular/core';
import { GraphqlService, FileReference } from '../shared/graphql.service';
import { Observable } from 'rxjs';
import { AppBarService } from '../app-bar/app-bar.service';

@Component({
  selector: 'uems-minutes',
  styleUrls: ['pictures.component.css'],
  templateUrl: 'pictures.component.html'
})
export class PicturesComponent implements OnInit, OnDestroy {
  @ViewChild('galleryTemplate') galleryTemplate;
  @ViewChild('largeImage') largeImage: ElementRef;

  files = this.graphQL.pictures;
  galleryActive: boolean = false;
  activeImage: FileReference = {fileName: '', url: ''};

  constructor(private viewContainerRef: ViewContainerRef,
              private applicationRef: ApplicationRef,
              public graphQL: GraphqlService,
              private renderer: Renderer,
              private zone: NgZone,
              private appbar: AppBarService) {}

  ngOnInit() {
    this.appbar.setAppTitle('Pictures');
    this.getRootViewContainerRef().createEmbeddedView(this.galleryTemplate, 0);
  }

  ngOnDestroy() {
    this.getRootViewContainerRef().detach(0);
  }

  enlargeImage(event: MouseEvent, image: FileReference) {
    const target: any = event.target;
    const imageHolder = target.parentElement.parentElement;
    /*
      scale: 0.3055,
      x: -562
      y: -916
     */
    this.activeImage = image;
    this.zone.runOutsideAngular(() =>
      requestAnimationFrame(() => {
        const gallery: any = this.getRootViewContainerRef().get(0);
        const largeImage = gallery.internalView._el_3;
        const first = imageHolder.getBoundingClientRect();
        const last = largeImage.getBoundingClientRect();
        console.log('target', first);
        console.log('largeImage', last);
        const scale = first.height / last.height;
        const x = first.right - (last.right + (last.width * scale));
        const y = 0;

        this.renderer.setElementStyle(largeImage, 'transform', `scale(${scale}) translate(${x}px, ${y}px)`);

        this.zone.runOutsideAngular(() =>
          requestAnimationFrame(() => {
            this.renderer.setElementClass(largeImage, 'animate-on-transforms', true);
            this.renderer.setElementStyle(largeImage, 'transform', '');
          })
        );


        largeImage.addEventListener('transitionend', () => {
          largeImage.removeEventListener('transitionend');
          this.renderer.setElementClass(largeImage, 'animate-on-transforms', false);
        });

      }));
    this.galleryActive = true;
  }

  getRootViewContainerRef(): ViewContainerRef {
    const appInstance = this.applicationRef.components[0].instance;
    if (!appInstance.viewContainerRef) {
      const appName = this.applicationRef.componentTypes[0].name;
      throw new Error(`Missing 'viewContainerRef' declaration in ${appName} constructor`);
    }
    return appInstance.viewContainerRef;
  }

}
