import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/Task';
import { TaskService } from 'src/app/core/service/TaskService';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})

export class TaskCardComponent{
  @Input() task!:Task;


  constructor(private taskService:TaskService,private router : Router ) {}
public deleteTask(id:String){
  this.taskService.deleteTask(id);
this.reload();

}
public duplicateTask(id:String){
  this.taskService.duplicateTask(id);
  this.reload();
}

reload(){
  window.location.reload();
}
}
