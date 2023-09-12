import {Component, Input} from '@angular/core';
import {QuizService} from "../../../core/service/quiz.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {BsModalRef} from "ngx-bootstrap/modal";
import {catchError} from "rxjs";

@Component({
    selector: 'app-delete-quiz',
    templateUrl: './delete-quiz.component.html',
    styleUrls: ['./delete-quiz.component.scss']
})
export class DeleteQuizComponent {
    @Input() quizId?: number;

    constructor(
        private quizService: QuizService,
        private notificationService: NotificationService
    ) {
    }

    deleteQuiz(modal: BsModalRef) {
        if (this.quizId) {
            this.quizService.deleteQuizById(this.quizId).pipe(
                catchError((error) => {
                    this.notificationService.showError('Quiz not deleted', 'Error');
                    return error
                }),
            ).subscribe(
                () => {
                    modal.hide()
                    this.notificationService.showSuccess('Quiz deleted successfully', 'Success');
                    this.quizService.updateQuizzes()
                }
            );

        }
    }
}
