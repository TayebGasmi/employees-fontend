
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

}
