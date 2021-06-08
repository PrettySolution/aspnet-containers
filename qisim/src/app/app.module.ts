import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MsalModule} from '@azure/msal-angular';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-angular
    // https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/v1-v2-upgrade-guide.md
    MsalModule.forRoot(
      {

      },
      {},
      {}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
