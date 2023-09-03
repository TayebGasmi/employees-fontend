import {Component, Input} from '@angular/core';
import {QuizForm} from "../../../core/models/QuizForm";
import {NotificationService} from "../../../shared/service/notification.service";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {debounceTime, tap} from "rxjs";
import {QuizService} from "../../../core/service/quiz.service";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent {

  @Input() skillId: number = 0;
  protected readonly QuizForm = QuizForm;

  constructor(private quizService: QuizService, private notificationService: NotificationService) {
  }

  addQuiz(form: FormGroup, modal: BsModalRef) {

    if (form.invalid) {

      this.notificationService.showError(
        `Please fill all the required correctly fields`,
        'Error')
      return;
    }
    this.quizService.addQuizToSkill(form.value, this.skillId).pipe(
      debounceTime(500),
      tap((value) => {
        modal.hide();
        this.quizService.updateQuizzes(value);
        this.notificationService.showSuccess(
          `Skill ${value.name} added successfully`,
          'Success')
      })
    ).subscribe();
  }
}
