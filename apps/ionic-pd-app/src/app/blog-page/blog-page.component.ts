import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { Store } from '@ngrx/store';
import { IBlogState, selectAllBlogs } from '../blogs/blog.reducer';
import { take } from 'rxjs';

@Component({
  selector: 'playground-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  public blogCollection: IBlog[] | undefined;
  constructor(private router: Router, public blogStore: Store<IBlogState>) {}

  ngOnInit(): void {
    //   this.blogStore
    //     .select(selectAllBlogs)
    //     .pipe(take(1))
    //     .subscribe((blog) => (this.blogCollection = blog));
  }
}
