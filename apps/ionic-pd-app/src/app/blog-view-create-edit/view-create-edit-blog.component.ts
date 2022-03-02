import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IBlogState } from '../blogs/blog.reducer';
import { createBlog, createBlogContent } from '../blogs/blog.actions';
import { BlogMethod, IBlog } from '../models/blog';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 } from 'uuid';
import { BlogsService } from '../blogs/blogs.service';

@Component({
  selector: 'playground-blog-view-create-edit',
  templateUrl: './view-create-edit-blog.component.html',
  styleUrls: ['./view-create-edit-blog.component.scss'],
})
export class ViewCreateEditBlogComponent implements OnInit {
  whichView = 'create';
  blogMethod: BlogMethod | undefined;
  // blog: IBlog | undefined;
  public plotId: string | undefined;
  public blogInfoForm: FormGroup = new FormGroup({
    blogId: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    public blogStore: Store<IBlogState>,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'));
    console.log(this.router.snapshot.paramMap.get('blogMethod'));
  }

  createBlog() {
    this.blogStore.dispatch(
      createBlogContent({
        blog: this.blogInfoForm.value,
      })
    );
    console.log(this.blogInfoForm);
  }

  updateBlog() {}
}
