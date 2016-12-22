import { MinutesService } from './+minutes/minutes.service';
import { WindowSize } from './shared/window-resize.service';
import { GraphqlService } from './shared/graphql.service';
import { AppBarService } from './app-bar/app-bar.service';

export const APP_PROVIDERS = [
  GraphqlService,
  AppBarService,
  WindowSize,
  MinutesService
];
