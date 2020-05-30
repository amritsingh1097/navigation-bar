import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "nav-drawer",
  templateUrl: "./nav-drawer.component.html",
  styleUrls: ["./nav-drawer.component.css"]
})
export class NavDrawerComponent implements OnInit {
  
  @Input()
  @HostBinding('class.open')
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

}
