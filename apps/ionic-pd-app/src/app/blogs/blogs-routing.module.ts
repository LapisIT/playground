import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [{ path: '', component: BlogsComponent }];

@NgModule({
  /*
  This way, Angular knows that the route list is only responsible for providing additional routes
  and is intended for feature modules.
  */
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {
}
