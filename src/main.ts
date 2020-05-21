import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { factory } from '@gooddata/gd-bear-client';
// import sdk from "@gooddata/gd-bear-client";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// window['gooddata'] = factory({ domain: '' });
var gooddata = factory({ domain: "developer.na.gooddata.com" });
gooddata.user
    .login("mai.nguyen@gooddata.com", "Mai123^^")
    .then(response => console.log("Login OK", response))
    .catch(apiError => console.error("Login failed", apiError, "\n\n", apiError.responseBody));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

