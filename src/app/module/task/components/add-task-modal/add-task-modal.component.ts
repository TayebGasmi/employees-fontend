import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Task} from 'src/app/core/models/Task';
import {TaskType} from 'src/app/core/models/task-type.enum';
import {TaskService} from 'src/app/core/service/TaskService';

@Component({
    selector: 'app-add-task-modal',
    templateUrl: './add-task-modal.component.html',
    styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent {
    taskTypes = [TaskType.BUGFIX, TaskType.DOCUMENTATION, TaskType.FEATURE];
    task!: Task;
    addTaskForm = this.fb.group({
        taskTitle: new FormControl('', Validators.required),
        taskDescription: new FormControl('', Validators.required),
        taskEstimation: new FormControl('', Validators.required),
        taskTime: new FormControl('', Validators.required),
        taskType: new FormControl('', Validators.required)

    })

    constructor(public bsModalRef: BsModalRef,
                private fb: FormBuilder,
                private taskService: TaskService) {
    }


    onSubmit(myForm: FormGroup) {
        this.task = myForm.value
        this.taskService.saveTask(this.task).subscribe();
        this.bsModalRef.hide()
        window.location.reload();
    }
}
