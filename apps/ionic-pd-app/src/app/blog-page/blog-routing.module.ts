import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  {
    path: 'view/:id',
    loadChildren: () =>
      import(
        '../blog-view-create-edit/blog-view-create-edit-routing.module'
      ).then((m) => m.BlogViewCreateEditRoutingModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import(
        '../blog-view-create-edit/blog-view-create-edit-routing.module'
      ).then((m) => m.BlogViewCreateEditRoutingModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import(
        '../blog-view-create-edit/blog-view-create-edit-routing.module'
      ).then((m) => m.BlogViewCreateEditRoutingModule),
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
