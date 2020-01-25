import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NavBarModule } from './nav-bar/nav-bar.module';

library.add(faBars);
library.add(faHome);
library.add(faPhoneAlt);
library.add(faEnvelope);

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, NavBarModule, FontAwesomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
