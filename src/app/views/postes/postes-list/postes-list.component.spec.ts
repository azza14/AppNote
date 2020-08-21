import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesListComponent } from './postes-list.component';

describe('PostesListComponent', () => {
  let component: PostesListComponent;
  let fixture: ComponentFixture<PostesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
