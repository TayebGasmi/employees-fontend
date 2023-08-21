import { Component, Input } from '@angular/core';
import { Task } from 'src/app/core/models/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})

export class TaskCardComponent {
  @Input() task!:Task;
}
