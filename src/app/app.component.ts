import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @HostBinding('class.nav-drawer-open')
  isNavDrawerOpen: boolean = false;

  onNavDrawerToggled(isNavDrawerOpen: boolean) {
    console.log("Nav Drawer Toggled");
    
    this.isNavDrawerOpen = isNavDrawerOpen;
  }

}
