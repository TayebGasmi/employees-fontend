import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {QuestionService} from "../../../core/service/question.service";
import {map, Observable, switchMap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuizQuestionComponent {
  constructor(private notificationService:NotificationService,private route:ActivatedRoute,private quizService:QuizService, private questionService :QuestionService ) {

  }

  quizId$:Observable<number>=this.route.params.pipe((params)=>params.pipe(map((param)=>param["id"])));
  questions$:Observable<Question[]>=this.quizId$.pipe(switchMap((id)=>this.quizService.getQuizQuestions(id)));
  
}
