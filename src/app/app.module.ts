import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { I18NEXT_SERVICE, I18NextModule, ITranslationService } from 'angular-i18next';
import HttpApi from 'i18next-http-backend';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18NextModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (i18next: ITranslationService) => () => i18next.use(HttpApi).init({
        lng: "en",
        backend: {
          loadPath: "assets/locales/{{lng}}.json"
        }
      }),
      deps: [I18NEXT_SERVICE],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
