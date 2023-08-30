import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/core/models/Sprint';
import { Task } from 'src/app/core/models/Task';
import { TaskService } from 'src/app/core/service/TaskService';
import { SprintServiceService } from 'src/app/core/service/sprint-service.service';
import { TaskStatus } from 'src/app/core/models/task-status.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddSprintModalComponent } from '../add-sprint-modal/add-sprint-modal.component';

@Component({
  selector: 'app-sprint-section',
  templateUrl: './sprint-section.component.html',
  styleUrls: ['./sprint-section.component.scss']
})
export class SprintSectionComponent implements OnInit {
sprints:Sprint[] = []

allToDoTasks :Task[] = [];
allInProgressTasks :Task[] = [];
allUnderReviewTasks :Task[] = [];
allTestTasks :Task[] = [];
allDoneTasks :Task[] = [];

bsModalRef?: BsModalRef;

isClicked:boolean=false;

	constructor(private sprintService:SprintServiceService,
              private taskService:TaskService,
              private  modalService: BsModalService) {
	}
  ngOnInit(): void {
    this.getAllSprints();
  }
getAllSprints(){
  this.sprintService.getAllUndeletedSprints().subscribe(sprints=>{
    this.sprints = sprints;

  });
}
selectSprint(value:String){
this.allToDoTasks  = [];
this.allInProgressTasks  = [];
this.allUnderReviewTasks  = [];
this.allTestTasks  = [];
this.allDoneTasks  = [];

this.isClicked = true;

this.taskService.selectTasksPerSprint(value).subscribe(tasks=>{
     tasks.forEach(task=>{
      if(task.taskStatus === TaskStatus.TODO){
        this.allToDoTasks.push(task);
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


     });

})
}
openModel(){
  this.bsModalRef = this.modalService.show(AddSprintModalComponent);
}

deleteSprint(sprintId:String){
  this.sprintService.deleteSprint(sprintId);
}
}
