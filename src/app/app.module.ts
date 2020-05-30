import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { NavBarModule } from './nav-bar/nav-bar.module';


const routes: Routes = [];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), NavBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports:      [ RouterModule ]
})
export class AppModule { }
