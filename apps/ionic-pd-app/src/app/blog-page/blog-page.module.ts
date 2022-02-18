import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { IonicModule } from '@ionic/angular';
import { ViewCreateEditBlogComponent } from '../blog-view-create-edit/view-create-edit-blog.component';

@NgModule({
  declarations: [BlogPageComponent, ViewCreateEditBlogComponent],
  imports: [CommonModule, BlogRoutingModule, IonicModule],
})
export class BlogPageModule {}
