import {Component} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {QuestionService} from "../../../core/service/question.service";
import {map, Observable, switchMap} from "rxjs";
import {Quiz} from "../../../core/models/quiz";
import {Question} from "../../../core/models/question";

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent {
  constructor(private notificationService:NotificationService,private route:ActivatedRoute,private quizService:QuizService, private questionService :QuestionService ) {

  }
  quizId$:Observable<number>=this.route.params.pipe((params)=>params.pipe(map((param)=>param["id"])));
  Quiz$:Observable<Quiz>=this.quizId$.pipe(switchMap((id)=>this.quizService.getQuizById(id)));

}
