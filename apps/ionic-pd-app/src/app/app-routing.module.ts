import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog-page/blog-page.module').then((m) => m.BlogPageModule),
  },
];

@NgModule({
  /*
  This lets Angular know that the AppRoutingModule is a routing module
  and forRoot() specifies that this is the root routing module

  Preloading improves UX by loading parts of your application in the background.
  You can preload modules or component data.
  */
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
