import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateEditBlogComponent } from './view-create-edit-blog.component';

describe('ViewCreateEditBlogComponent', () => {
  let component: ViewCreateEditBlogComponent;
  let fixture: ComponentFixture<ViewCreateEditBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreateEditBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreateEditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
