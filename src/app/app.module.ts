import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  imports:      [ BrowserModule, NavBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
