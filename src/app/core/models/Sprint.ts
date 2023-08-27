
import { SprintStatus } from "./sprint-status.enum";

export class Sprint{
sprintId!:String;
sprintTitle!:String;
sprintDescription!:String;
startDate!:Date;
endDate!:Date;
sprintStatus!:SprintStatus;
}
