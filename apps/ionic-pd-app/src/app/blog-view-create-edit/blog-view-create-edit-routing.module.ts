import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCreateEditBlogComponent } from './view-create-edit-blog.component';

const routes: Routes = [
  { path: ':id', component: ViewCreateEditBlogComponent },
  { path: '', component: ViewCreateEditBlogComponent },
];

@NgModule({
  /*
  This way, Angular knows that the route list is only responsible for providing additional routes
  and is intended for feature modules.
  */
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogViewCreateEditRoutingModule {}
