import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment"
import {Skill} from "../models/Skill";
import {Observable} from "rxjs";
import {Page} from "../models/Page";
const skillUrl=environment.skillUrl

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private baseUrl: string = `${skillUrl}/skill`
  constructor(private http:HttpClient) { }
  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl, skill);
  }

  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.baseUrl}/${id}`);
  }

  updateSkillById(id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.baseUrl}/${id}`, skill);
  }

  deleteSkillById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllSkills(page: number=0, size: number=10): Observable<any> {
    return this.http.get<Page<Skill>>(this.baseUrl, { params: { page: page.toString(), size: size.toString() } });
  }


  assignSkillToUser(userId: number, skillId: number): Observable<Skill> {
    return this.http.post<Skill>(`${this.baseUrl}/assign/${userId}/${skillId}`, {});
  }

  assignAllSkillsToUser(userId: number, skills: Skill[]): Observable<Skill[]> {
    return this.http.post<Skill[]>(`${this.baseUrl}/assign-all/${userId}`, skills);
  }
  searchSkills(name:string,page: number, size: number):Observable<Page<Skill>>{
    return this.http.get<Page<Skill>>(`${this.baseUrl}/search`, { params: { name: name,page: page.toString(), size: size.toString()} });
  }
}
