import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarOpen = false;

  toggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  open() {
    this.isSidebarOpen = true;
  }
}
