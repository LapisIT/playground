import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { blogFeatureKey, blogReducer } from './blog.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(blogFeatureKey, blogReducer)],
})
export class BlogsModule {}
