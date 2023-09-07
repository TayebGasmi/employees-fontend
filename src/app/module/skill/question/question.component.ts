import {Component, Input} from '@angular/core';
import {QuestionService} from "../../../core/service/question.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {Question} from "../../../core/models/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  constructor(private questionService:QuestionService,private notificationService:NotificationService) {

  }
  @Input() question?:Question;
  @Input() index?:number;


  onEdit(question: Question) {
    
  }

  onDelete(question: Question) {
    
  }
}
