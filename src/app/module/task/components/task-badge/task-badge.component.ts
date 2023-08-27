import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from 'src/app/core/models/task-status.enum';
import { TaskType } from 'src/app/core/models/task-type.enum';

@Component({
  selector: 'app-task-badge',
  templateUrl: './task-badge.component.html',
  styleUrls: ['./task-badge.component.scss']
})
export class TaskBadgeComponent implements OnInit {
  @Input() inputTaskType !: TaskType ;
  @Input() inputTaskStatus !: TaskStatus ;

  ngOnInit() {

  }

}
