import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-detailed',
  templateUrl: './users-detailed.component.html',
  styleUrls: ['./users-detailed.component.css'],
})
export class UsersDetailedComponent implements OnInit {
  userId: number = 0;
  userDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];

      this.http
        .get<any>(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
        .subscribe((data) => {
          this.userDetails = data;
          console.log('Fetched user details:', data);
        });
    });
  }
}
