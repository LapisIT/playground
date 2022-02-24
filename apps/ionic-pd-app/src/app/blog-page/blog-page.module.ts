import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [CommonModule, BlogRoutingModule, IonicModule],
})
export class BlogPageModule {}
