import {Component, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {QuestionService} from "../../../core/service/question.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent {
  constructor(private questionService: QuestionService,private notificationService:NotificationService) {

  }
  @Input() questionId?: number;

  delete(modal: BsModalRef) {
    if (this.questionId) {
      this.questionService.deleteQuestionById(this.questionId).
      pipe(
        catchError(err => {
          this.notificationService.showError('Question not deleted', 'Error');
          throw err;
        }
        )
      ).
      subscribe(
        () => {
          this.notificationService.showSuccess('Question deleted successfully', 'Success');
          modal.hide();
        });
    }
  }
}
