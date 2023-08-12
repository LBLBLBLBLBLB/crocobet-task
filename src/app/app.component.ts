import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crocobet-task';

  showDetailedView = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showDetailedView = event.url.includes('/users-detailed/');
      }
    });
  }
}
