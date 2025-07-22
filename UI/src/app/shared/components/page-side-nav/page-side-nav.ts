import { Component } from '@angular/core';

export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'app-page-side-nav',
  standalone: false,
  templateUrl: './page-side-nav.html',
  styleUrl: './page-side-nav.scss'
})
export class PageSideNav {
panelName: string = 'Student Panel';
navItems: NavigationItem[] =[];

constructor() {
    this.navItems = [
      { value: 'View Books', link: 'view-books' },
      { value: 'My Orders', link: 'my-orders' }
    ]
  };

}
