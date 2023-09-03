import {Component} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {QuestionService} from "../../../core/service/question.service";

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent {
  constructor(private notificationService:NotificationService,private route:ActivatedRoute,private quizService:QuizService, private questionService :QuestionService ) {

  }

}
