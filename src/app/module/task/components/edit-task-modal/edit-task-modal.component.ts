import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Task} from 'src/app/core/models/Task';
import {TaskType} from 'src/app/core/models/task-type.enum';
import {TaskService} from 'src/app/core/service/TaskService';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss']
})
export class EditTaskModalComponent {
  task!: Task;
  taskTypes = [TaskType.BUGFIX, TaskType.DOCUMENTATION, TaskType.FEATURE];
  addTaskForm = this.fb.group({
    taskTitle: new FormControl(this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['taskTitle'] : '', Validators.required),
    taskDescription: new FormControl(this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['taskDescription'] : '', Validators.required),
    taskEstimation: new FormControl(this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['taskEstimation'] : '', Validators.required),
    taskTime: new FormControl(this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['taskTime'] : '', Validators.required),
    taskType: new FormControl(this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['taskType'] : '', Validators.required)

  })

  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private taskService: TaskService,
              private modalService: BsModalService) {
  }

  ngOnInit() {

  }

  onSubmit(myForm: FormGroup) {
    this.task = myForm.value
    this.taskService.updateTask(this.task, this.modalService.config.initialState !== undefined ? this.modalService.config.initialState['id'] : '').subscribe();
    this.bsModalRef.hide()
    window.location.reload();
  }
}
