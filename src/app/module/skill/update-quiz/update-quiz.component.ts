import {Component, Input} from '@angular/core';
import {QuizForm} from "../../../core/models/QuizForm";
import {Quiz} from "../../../core/models/quiz";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {NotificationService} from "../../../shared/service/notification.service";
import {QuizService} from "../../../core/service/quiz.service";
import {tap} from "rxjs";

@Component({
    selector: 'app-update-quiz',
    templateUrl: './update-quiz.component.html',
    styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent {

    @Input()
    Quiz?: Quiz;
    protected readonly QuizForm = QuizForm;

    constructor(private notificationService: NotificationService, private quizService: QuizService) {
    }

    updateQuiz(form: FormGroup, modal: BsModalRef) {
        if (form.invalid) {
            this.notificationService.showError(
                `Please fill all the required correctly fields`,
                'Error')
            return;
        }
        this.quizService.updateQuizById(this.Quiz?.id ?? 0, form.value).pipe(
            tap((value) => {
                    this.notificationService.showWarning(
                        `${value.name} updated successfully`,
                        'updated'
                    );
                    modal.hide();
                    this.quizService.updateQuizzes(value);
                }
            )).subscribe();
    }
}
