import { TaskStatus } from "./task-status.enum";
import { TaskType } from "./task-type.enum";

export class Task{
  taskId!:String;
  taskType!:TaskType;
  taskDescription!:String;
  taskTime!:number;
  taskTitle!:string;
  taskEstimmation!:number;
  taskStatus!:TaskStatus;

}
