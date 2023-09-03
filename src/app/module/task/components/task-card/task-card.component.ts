import {Component, Input} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TaskService} from 'src/app/core/service/TaskService';
import {EditTaskModalComponent} from '../edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})

export class TaskCardComponent {
  @Input() task: any;
  bsModalRef?: BsModalRef;


  constructor(private taskService: TaskService,
              private modalService: BsModalService) {
  }

  public deleteTask(id: String) {
    this.taskService.deleteTask(id);
    this.reload();

  }

  public duplicateTask(id: String) {
    this.taskService.duplicateTask(id);
    this.reload();
  }

  openEditModel() {
    const task = this.task;
    this.bsModalRef = this.modalService.show(EditTaskModalComponent, {
      initialState: task
    });
  }

  reload() {
    window.location.reload();
  }
}
