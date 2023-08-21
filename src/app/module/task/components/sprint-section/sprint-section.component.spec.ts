import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintSectionComponent } from './sprint-section.component';

describe('SprintSectionComponent', () => {
  let component: SprintSectionComponent;
  let fixture: ComponentFixture<SprintSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
