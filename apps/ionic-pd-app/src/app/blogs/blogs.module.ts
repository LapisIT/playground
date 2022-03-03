import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { blogFeatureKey, blogReducer } from './blog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './blog.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(blogFeatureKey, blogReducer),
    EffectsModule.forFeature([BlogEffects]),
  ],
})
export class BlogsModule {}
