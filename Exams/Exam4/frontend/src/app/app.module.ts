import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { MainComponent } from './Layout/main/main.component';
import { AboutComponent } from './Pages/about/about.component';
import { NewActionComponent } from './Pages/new-action/new-action.component';
import { Page404Component } from './Pages/page404/page404.component';
import { AllAccountDetailsComponent } from './Pages/all-account-details/all-account-details.component';
import { LoginComponent } from './Pages/login/login.component';
import { InputUserComponent } from './comps/input-user/input-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    AboutComponent,
    NewActionComponent,
    Page404Component,
    AllAccountDetailsComponent,
    LoginComponent,
    InputUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
