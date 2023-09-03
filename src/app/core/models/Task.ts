import {TaskStatus} from "./task-status.enum";
import {TaskType} from "./task-type.enum";

export class Task {
  id!: String;
  taskType!: TaskType;
  taskDescription!: String;
  taskTime!: number;
  taskTitle!: string;
  taskEstimation!: number;
  taskStatus!: TaskStatus;

}
