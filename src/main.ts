import { AppModule } from './app/app.module';
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './app/environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
  }
  
  const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
  ];
  
  if (environment.production) {
    enableProdMode();
  }
  

