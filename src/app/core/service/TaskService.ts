
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/Task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly API_URL = environment.taskUrl;

  constructor(private httpClient: HttpClient) { }
  getAllUndeletedTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.API_URL+"/undeleted")
  }
  deleteTask(id:String){

     this.httpClient.put<Task>(this.API_URL+"/delete/"+id,"").subscribe();
  }
  duplicateTask(id:String){
    console.log(this.API_URL+"/duplicate/"+id);
   this.httpClient.post<Task>(this.API_URL+"/duplicate/"+id,"").subscribe();
  }

}
