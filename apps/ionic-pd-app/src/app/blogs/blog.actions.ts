import { createAction, props } from '@ngrx/store';
import { IBlog } from '../models/blog';
import { Update } from '@ngrx/entity';

export const createBlog = createAction(
  '[Blog] Create Blog',
  props<{ blog: IBlog }>()
);

export const updateBlog = createAction(
  '[Blog] Update Blog',
  props<{ blog: Update<IBlog> }>()
);

export const deleteBlog = createAction(
  '[Blog] Delete Blog',
  props<{ blogId: string }>()
);
