import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SUCCESSComponent } from './TARGIL/success/success.component';
import { ERRORComponent } from './TARGIL/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SUCCESSComponent,
    ERRORComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
