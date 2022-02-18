import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IBlogState } from '../blogs/blog.reducer';

@Component({
  selector: 'playground-blog-view-create-edit',
  templateUrl: './view-create-edit-blog.component.html',
  styleUrls: ['./view-create-edit-blog.component.scss'],
})
export class ViewCreateEditBlogComponent implements OnInit {
  whichView: string;
  constructor(private router: Router, public blogStore: Store<IBlogState>) {
    if (this.router.url.endsWith('blog/create')) {
      this.whichView = 'create';
    } else if (this.router.url.endsWith('blog/edit')) {
      this.whichView = 'edit';
    } else {
      this.whichView = 'view';
    }
  }

  ngOnInit(): void {}

  createBlog() {
    // this.blogStore.dispatch();
  }
}
