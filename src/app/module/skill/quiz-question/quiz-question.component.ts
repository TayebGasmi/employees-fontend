import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {QuestionService} from "../../../core/service/question.service";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
    selector: 'app-quiz-question',
    templateUrl: './quiz-question.component.html',
    styleUrls: ['./quiz-question.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizQuestionComponent {
    quizId$: Observable<number> = this.route.params.pipe((params) => params.pipe(map((param) => param["id"])));
    getQuestion$: Observable<Question[]> = this.quizId$.pipe(switchMap((id) => this.quizService.getQuizQuestions(id)));
    updateQuestions$ = new BehaviorSubject<Question | null>(null);
    questions$: Observable<Question[]> = this.updateQuestions$.pipe(
        switchMap(() => this.getQuestion$)
    )
    currentIndex = 0;

    constructor(private notificationService: NotificationService, private route: ActivatedRoute, private quizService: QuizService, private questionService: QuestionService) {

    }

    nextQuestion() {

        this.currentIndex++;
    }

    previousQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

}
