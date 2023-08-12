import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailedComponent } from './users-detailed/users-detailed.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users-detailed/:id', component: UsersDetailedComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
