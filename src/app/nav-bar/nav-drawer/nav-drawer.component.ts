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
    let list = document.getElementsByClassName("drawer-item-link");

    this.drawerList = new Map<string, HTMLAnchorElement>();
    
    for (let i in list) {
      if (list[i].id != undefined) {
        this.drawerList.set(list[i].id, <HTMLAnchorElement> list[i])
      }
    }

    this.isNavDrawerOpen = false;

    for (let item of this.drawerList) {
      item[1].classList.remove("drawer-link-active");
    }
  }

  onLinkClick(name: string) {
    this.isNavDrawerOpen = false;

    this.drawerList.forEach((element) => {
      console.log(element);
      element.classList.remove("drawer-link-active");
    })

    this.drawerList.get(name).classList.add("drawer-link-active");

    this.navDrawerToggleEmitter.emit(this.isNavDrawerOpen);
  }

}
