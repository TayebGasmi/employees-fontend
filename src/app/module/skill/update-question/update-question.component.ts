import {Component, Input} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {QuestionService} from "../../../core/service/question.service";
import {Question} from "../../../core/models/question";
import {QuestionForm} from "../../../core/models/QuestionForm";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {BehaviorSubject, tap} from "rxjs";

@Component({
    selector: 'app-update-question',
    templateUrl: './update-question.component.html',
    styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent {
    @Input()
    question?: Question
    @Input()
    updateQuestions$?: BehaviorSubject<Question | null>;
    protected readonly QuestionForm = QuestionForm;

    constructor(private notificationService: NotificationService, private questionService: QuestionService) {

    }

    updateQuestion(form: FormGroup, modal: BsModalRef) {
        if (form.invalid) {
            this.notificationService.showError(
                `Please fill all the required correctly fields`,
                'Error')
            return;
        }
        this.questionService.updateQuestionById(form.value, this.question?.id ?? 0,).pipe(
            tap((value) => {
                    this.notificationService.showWarning(
                        `question updated successfully`,
                        'updated'
                    );
                    this.updateQuestions$?.next(value);
                    modal.hide();
                }
            )).subscribe();
    }

}