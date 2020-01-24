import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  Output,
  AfterViewInit,
  EventEmitter
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  navElement: HTMLElement;
  navBgSolid: boolean;

  @HostBinding("class.isNavPresent")
  isNavPresent: boolean = true;
  isNavDrawerOpen: boolean = false;

  @Output()
  navDrawerToggleEmitter: EventEmitter<boolean> = new EventEmitter();

  @HostListener("window:scroll", ["$event"])
  onScroll($event) {
    if (this.isNavPresent) {
      let scrollFactor = 480;

      if (this.navBgSolid) {
        if (window.pageYOffset > 0) {
          // console.log(window.pageYOffset / 100);
          this.navElement.classList.add("navbar-shadow");
        } else {
          this.navElement.classList.remove("navbar-shadow");
        }
      } else {
        this.navElement.style.backgroundColor =
          "rgba(255, 255, 255, " + window.pageYOffset / scrollFactor + ")";

        if (window.pageYOffset / scrollFactor > 1) {
          console.log(window.pageYOffset / scrollFactor);
          this.navElement.classList.add("navbar-shadow");
        } else {
          this.navElement.classList.remove("navbar-shadow");
        }
      }
    }
  }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.navElement = document.getElementById("navbar");
    this.navElement.classList.remove("navbar-shadow");
    this.navBgSolid = event["navBgSolid"];
    if (this.navBgSolid) {
      this.navElement.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      this.navElement.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
  }

  toggleNavDrawer() {
    this.isNavDrawerOpen = !this.isNavDrawerOpen;
    console.log("Toggling Drawer - ", this.isNavDrawerOpen);

    this.navDrawerToggleEmitter.emit(this.isNavDrawerOpen);
  }

  navDrawerToggled(isNavDrawerOpen: boolean) {
    console.log("Emitted signal from drawer - " + isNavDrawerOpen);

    this.isNavDrawerOpen = isNavDrawerOpen;
    this.navDrawerToggleEmitter.emit(isNavDrawerOpen);
  }

  navDrawerOverlayToggled(isNavDrawerOpen: boolean) {
    console.log("Emitted signal from drawer overlay - " + isNavDrawerOpen);

    this.isNavDrawerOpen = isNavDrawerOpen;
    this.navDrawerToggleEmitter.emit(isNavDrawerOpen);
  }
}
