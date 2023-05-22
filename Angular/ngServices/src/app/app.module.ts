import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputUserComponent } from './comps/input-user/input-user.component';
import { ItemsListComponent } from './comps/items-list/items-list.component';

@NgModule({
  declarations: [AppComponent, InputUserComponent, ItemsListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
