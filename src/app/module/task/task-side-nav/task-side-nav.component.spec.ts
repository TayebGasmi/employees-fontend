import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSideNavComponent } from './task-side-nav.component';

describe('TaskSideNavComponent', () => {
  let component: TaskSideNavComponent;
  let fixture: ComponentFixture<TaskSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
