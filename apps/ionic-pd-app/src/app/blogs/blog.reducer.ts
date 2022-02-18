import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { IBlog } from '../models/blog';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BlogActions from './blog.actions';

export const blogFeatureKey = 'blog';

export type IBlogState = EntityState<IBlog>;

export const adapter: EntityAdapter<IBlog> = createEntityAdapter<IBlog>();

export const initialIBlogState: IBlogState = adapter.getInitialState({});

export const blogReducer = createReducer(
  initialIBlogState,
  on(BlogActions.createBlog, (state, { blog }) => {
    return adapter.addOne(blog, state);
  }),
  on(BlogActions.updateBlog, (state, { blog }) => {
    return adapter.updateOne(blog, state);
  }),
  on(BlogActions.deleteBlog, (state, { blogId }) => {
    return adapter.removeOne(blogId, state);
  })
);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

export const selectBlogIds = selectIds;

export const selectBlogTotal = selectTotal;

export const selectBlogState =
  createFeatureSelector<IBlogState>(blogFeatureKey);

export const selectAllBlogs = createSelector(selectBlogState, selectAll);

export const selectBlogById = (id: string) =>
  createSelector(selectAllBlogs, (blogs) =>
    blogs.find((blog) => blog.blogId === id)
  );
