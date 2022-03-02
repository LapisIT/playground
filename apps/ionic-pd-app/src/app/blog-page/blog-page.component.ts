import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlog } from '../models/blog';
import { Store } from '@ngrx/store';
import { IBlogState, selectAllBlogs } from '../blogs/blog.reducer';
import { take } from 'rxjs';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'playground-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements ViewWillEnter {
  public blogList: IBlog[] | undefined;
  constructor(
    private router: Router,
    public blogStore: Store<IBlogState>,
    private cdr: ChangeDetectorRef
  ) {}

  ionViewWillEnter() {
    this.blogStore
      .select(selectAllBlogs)
      .pipe(take(1))
      .subscribe((blogs) => {
        console.log(blogs);
        this.blogList = blogs;
        this.cdr.detectChanges();
      });
  }
}
