import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NavBarModule } from './nav-bar/nav-bar.module';

library.add(faBars);
library.add(faHome);
library.add(faPhoneAlt);
library.add(faEnvelope);

const routes: Routes = [];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), NavBarModule, FontAwesomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports:      [ RouterModule ]
})
export class AppModule { }
