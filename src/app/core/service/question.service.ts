import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Question} from "../models/question";
import {Observable} from "rxjs";
const skillUrl = environment.skillUrl

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl: string = `${skillUrl}/question`

  constructor(private http:HttpClient) { }
  addQuestionToQuizWithOptions(question: Question, quizId: number): Observable<Question> {
    return this.http.post<Question>(`${this.baseUrl}/quiz/${quizId}`, question);
  }
  updateQuestionById(question:Question, id:number):Observable<Question>{
    return this.http.put<Question>(`${this.baseUrl}/${id}`,question)
  }

}
