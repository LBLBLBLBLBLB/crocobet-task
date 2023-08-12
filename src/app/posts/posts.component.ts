import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  onGoBackClick(): void {
    this.router.navigate(['/']);
  }
  onMainPageClick(): void {
    this.router.navigate(['/']);
  }
}
