import {
  Component,
  HostListener,
  OnInit,
  Output,
  AfterViewInit,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  navElement: HTMLElement;
  isNavDrawerOpen: boolean = false;

  @Output()
  navDrawerToggleEmitter: EventEmitter<boolean> = new EventEmitter();

  @HostListener("window:scroll", ["$event"])
  onScroll($event) {
    let scrollFactor = 150;

    this.navElement.style.backgroundColor =
      "rgba(255, 255, 255, " + window.pageYOffset / scrollFactor + ")";

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add("navbar-shadow");
    } else {
      this.navElement.classList.remove("navbar-shadow");
    }
  }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.navElement = document.getElementById("navbar");
    this.navElement.classList.remove("navbar-shadow");
    this.navElement.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }

  toggleNavDrawer() {
    this.isNavDrawerOpen = !this.isNavDrawerOpen;
    this.navDrawerToggleEmitter.emit(this.isNavDrawerOpen);
  }

  navDrawerToggled(isNavDrawerOpen: boolean) {
    this.isNavDrawerOpen = isNavDrawerOpen;
    this.navDrawerToggleEmitter.emit(isNavDrawerOpen);
  }

  navDrawerOverlayToggled(isNavDrawerOpen: boolean) {
    this.isNavDrawerOpen = isNavDrawerOpen;
    this.navDrawerToggleEmitter.emit(isNavDrawerOpen);
  }
}
