import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  {
    path: ':blogMethod',
    loadChildren: () =>
      import('../blog-view-create-edit/blog-view-create-edit.module').then(
        (m) => m.BlogViewCreateEditModule
      ),
  },
];

@NgModule({
  /*
  This way, Angular knows that the route list is only responsible for providing additional routes
  and is intended for feature modules.
  */
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
