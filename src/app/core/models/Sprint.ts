
import { Timestamp } from "rxjs";
import { SprintStatus } from "./sprint-status.enum";

export class Sprint{
id!:String;
sprintTitle!:String;
sprintDescription!:String;
startDate!:Timestamp<String>;
endDate!:Timestamp<String>;
sprintStatus!:SprintStatus;
}
