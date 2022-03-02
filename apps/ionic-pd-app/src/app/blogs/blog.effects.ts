import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createBlog, createBlogContent } from './blog.actions';
import { map, mapTo, tap } from 'rxjs';
import { BlogsService } from './blogs.service';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService) {}

  public createBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBlogContent),
      map(({ blog }) => this.blogService.createBlog(blog)),
      tap((blog) => console.log('-------', blog)),
      map((blog) => createBlog({ blog }))
    )
  );
}
