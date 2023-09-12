import {Component, Input} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {QuestionService} from "../../../core/service/question.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {BehaviorSubject, catchError, debounceTime, distinctUntilChanged, of, switchMap, tap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
    selector: 'app-delete-question',
    templateUrl: './delete-question.component.html',
    styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent {
    @Input() questionId?: number;
    @Input() updateQuestions$?: BehaviorSubject<Question | null>;

    constructor(private questionService: QuestionService, private notificationService: NotificationService) {

    }

    delete(modal: BsModalRef) {
        if (this.questionId) {
            const delete$ = of(this.questionId || 0).pipe(
                distinctUntilChanged(),
                debounceTime(1000),
                switchMap((id: number) => this.questionService.deleteQuestionById(id)),
                tap(() => {
                        this.notificationService.showSuccess('Question deleted successfully', 'Success')
                        this.updateQuestions$?.next(null);
                    }
                ),
                catchError(err => {
                        this.notificationService.showError('Question not deleted', 'Error');
                        throw err;
                    }
                )
            );
            delete$.subscribe(() => modal.hide())
        }
    }
}
