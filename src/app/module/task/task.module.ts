import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { TaskSideNavComponent } from './task-side-nav/task-side-nav.component';



@NgModule({
  declarations: [
    TaskPageComponent,
    TaskSideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
