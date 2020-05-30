import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NavDrawerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
