import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Task} from 'src/app/core/models/Task';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnChanges {
  @Input() tasks: Task[] = [];
  mytasks: Task[] = [];
  @Input() title!: String;

  ngOnChanges(changes: SimpleChanges): void {

    this.mytasks = this.tasks;
  }

}
