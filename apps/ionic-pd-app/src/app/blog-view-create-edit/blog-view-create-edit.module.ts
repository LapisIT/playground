import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ViewCreateEditBlogComponent } from './view-create-edit-blog.component';
import { BlogViewCreateEditRoutingModule } from './blog-view-create-edit-routing.module';

@NgModule({
  declarations: [ViewCreateEditBlogComponent],
  imports: [CommonModule, BlogViewCreateEditRoutingModule, IonicModule],
})
export class BlogViewCreateEditModule {}
