import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "nav-drawer",
  templateUrl: "./nav-drawer.component.html",
  styleUrls: ["./nav-drawer.component.css"]
})
export class NavDrawerComponent implements OnInit {
  @HostBinding("class.nav-drawer-open")
  @Input()
  isNavDrawerOpen: boolean;

  @Output()
  navDrawerToggleEmitter: EventEmitter<boolean> = new EventEmitter();

  drawerList: Map<string, HTMLAnchorElement>;
  currentPath: string;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log("AfterViewInit");

    let list = (
      document.getElementsByClassName("drawer-item-link")
    );

    this.drawerList = new Map();

    this.isNavDrawerOpen = false;

    console.log("Emitting signal from drawer - " + this.isNavDrawerOpen);

    for (let item of this.drawerList) {
      item[1].classList.remove("drawer-link-active");
    }

    // console.log("Current Path - " + this.currentPath);
    // this.drawerList.get(this.currentPath).classList.add("drawer-link-active");

    // this.navDrawerToggleEmitter.emit(this.isNavDrawerOpen);
  }

  onLinkClick(name: string) {
    this.isNavDrawerOpen = false;

    console.log("Emitting signal from drawer - " + this.isNavDrawerOpen);

    for (let item of this.drawerList) {
      item[1].classList.remove("drawer-link-active");
    }

    this.drawerList.get(name).classList.add("drawer-link-active");

    this.navDrawerToggleEmitter.emit(this.isNavDrawerOpen);
  }

}
