import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import * as styles from '@voxel/ui-styles';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// console.log(styles);
// styles.addLinkOnHead()

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
