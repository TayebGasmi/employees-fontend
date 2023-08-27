import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/Task';
import { TaskStatus } from 'src/app/core/models/task-status.enum';
import { TaskType } from 'src/app/core/models/task-type.enum';
import { TaskService } from 'src/app/core/service/TaskService';

@Component({
  selector: 'app-task-section',
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.scss']
})
export class TaskSectionComponent implements OnInit{
  allTasks :Task[] = [];
  allWaitingTasks :Task[] = [];
  allToDogTasks :Task[] = [];
  allInProgressTasks :Task[] = [];
  allUnderReviewTasks :Task[] = [];
  allTestTasks :Task[] = [];
  allDoneTasks :Task[] = [];



  constructor(private taskService:TaskService){}

  ngOnInit(): void {
   this.getTasks();

  }
  public refresh(id:String){
    console.log(id);
  }
  public  getTasks():void{
    this.taskService.getAllUndeletedTasks().subscribe(tasks=>{
      this.allTasks = tasks;
    /*  tasks.forEach(task=>{
      if(task.taskStatus === TaskStatus.WAITING){
        this.allWaitingTasks.push(task);
      }
      if(task.taskStatus === TaskStatus.TODO){
        this.allToDogTasks.push(task);
      }
      if(task.taskStatus === TaskStatus.IN_PROGRESS){
        this.allInProgressTasks.push(task);
      }
      if(task.taskStatus === TaskStatus.UNDER_REVIEW){
        this.allUnderReviewTasks.push(task);
      }
      if(task.taskStatus === TaskStatus.TEST){
        this.allTestTasks.push(task);
      }
      if(task.taskStatus === TaskStatus.DONE){
        this.allDoneTasks.push(task);
      }


     }); */
  /*    console.log(this.allTasks);
     console.log(this.allToDogTasks);
 */
   });

  }

}
