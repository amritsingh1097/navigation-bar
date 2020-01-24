import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHamburger, faHome, faEdit, faPhone, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';

import { NavBarModule } from './nav-bar/nav-bar.module';

// library.add(faHamburger);
// library.add(faHome);
// library.add(faEdit);
// library.add(faPhone);
// library.add(faEnvelope);
// library.add(faComments);

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, NavBarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
