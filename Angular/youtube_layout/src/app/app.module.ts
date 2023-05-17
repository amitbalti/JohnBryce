import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { GreenDirective } from './dir/green.directive';
import { YellowDirective } from './dir/yellow.directive';
import { RedDirective } from './dir/red.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    GreenDirective,
    YellowDirective,
    RedDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
