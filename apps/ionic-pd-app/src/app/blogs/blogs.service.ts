import { Injectable } from '@angular/core';
import { IBlog } from '../models/blog';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor() {}

  createBlog(blog: Omit<IBlog, 'blogId' | 'date'>): IBlog {
    return {
      ...blog,
      blogId: v4(),
      date: new Date(),
    };
  }
}
