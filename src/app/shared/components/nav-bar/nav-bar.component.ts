import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  /**
   * The navigation links of the nav bar.
   */
  public links: {}[] = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Location', route: '/location' },
    { name: 'Contact Us', route: '/contact-us' },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Checks if the menu option is the currently active page.
   * @param currentRoute The current router path.
   * @returns An object with the class name to use if active.
   */
  public isActive(currentRoute: string) {
    let activeRoute: string = this.router.url;
    return {
      active: activeRoute == currentRoute
    }
  }
}
