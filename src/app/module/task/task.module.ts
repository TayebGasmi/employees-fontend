import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './components/task-page/task-page.component';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { SprintSectionComponent } from './components/sprint-section/sprint-section.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';
import { TaskColumnComponent } from './components/task-column/task-column.component';
import { TaskBadgeComponent } from './components/task-badge/task-badge.component';




@NgModule({
  declarations: [
    TaskPageComponent,
    TaskCardComponent,
    SprintSectionComponent,
    TaskSectionComponent,
    TaskColumnComponent,
    TaskBadgeComponent
  ],
  providers:[],
  exports:[TaskPageComponent,TaskCardComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
