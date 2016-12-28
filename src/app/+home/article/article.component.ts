import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { UsefulLink } from '../../app-bar/app-bar.component';
import { FileReference } from '../../shared/graphql.service';

@Component({
  selector: 'uems-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {
  @Input() header: string;
  @Input() subheader: string;
  @Input() description: string;
  @Input() links: UsefulLink[];
  @Input() files: FileReference[];
  constructor() { }

}
