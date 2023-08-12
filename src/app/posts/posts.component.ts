import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];
  userId: number = 1;

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  onGoBackClick(): void {
    this.location.back();
  }
  onMainPageClick(): void {
    this.router.navigate(['/']);
  }
}
