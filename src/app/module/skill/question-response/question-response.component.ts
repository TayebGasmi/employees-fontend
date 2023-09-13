import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {map, Observable, switchMap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
    selector: 'app-question-response',
    templateUrl: './question-response.component.html',
    styleUrls: ['./question-response.component.scss']
})
export class QuestionResponseComponent {
    quizId$: Observable<number> = this.route.params.pipe((params) => params.pipe(map((param) => param["id"])));
    questions$: Observable<Question[]> = this.quizId$.pipe(switchMap((id) => this.quizService.getQuizQuestions(id)));
    currentIndex = 0;

    constructor(private route: ActivatedRoute, private quizService: QuizService) {

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
