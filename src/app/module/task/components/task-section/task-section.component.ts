import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Task} from 'src/app/core/models/Task';
import {TaskService} from 'src/app/core/service/TaskService';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';

@Component({
    selector: 'app-task-section',
    templateUrl: './task-section.component.html',
    styleUrls: ['./task-section.component.scss']
})
export class TaskSectionComponent implements OnInit {
    allTasks: Task[] = [];
    allWaitingTasks: Task[] = [];
    allToDogTasks: Task[] = [];
    allInProgressTasks: Task[] = [];
    allUnderReviewTasks: Task[] = [];
    allTestTasks: Task[] = [];
    allDoneTasks: Task[] = [];
    bsModalRef?: BsModalRef;


    constructor(private taskService: TaskService, private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.getTasks();

    }

    public refresh(id: string) {
        console.log(id);
    }

    public getTasks(): void {
        this.taskService.getAllUndeletedTasks().subscribe(tasks => {
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

    openModalWithComponent() {
        this.bsModalRef = this.modalService.show(AddTaskModalComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
    }
}
