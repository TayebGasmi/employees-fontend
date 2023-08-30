import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskPageComponent } from './components/task-page/task-page.component';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { SprintSectionComponent } from './components/sprint-section/sprint-section.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';
import { TaskColumnComponent } from './components/task-column/task-column.component';
import { TaskBadgeComponent } from './components/task-badge/task-badge.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import { AddSprintModalComponent } from './components/add-sprint-modal/add-sprint-modal.component';
import { EditSprintModalComponent } from './components/edit-sprint-modal/edit-sprint-modal.component';




@NgModule({
  declarations: [
    TaskPageComponent,
    TaskCardComponent,
    SprintSectionComponent,
    TaskSectionComponent,
    TaskColumnComponent,
    TaskBadgeComponent,
    AddTaskModalComponent,
    EditTaskModalComponent,
    AddSprintModalComponent,
    EditSprintModalComponent
  ],
  providers:[DatePipe],
  exports:[TaskPageComponent,TaskCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
