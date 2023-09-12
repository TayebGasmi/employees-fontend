import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../core/service/quiz.service";
import {QuestionService} from "../../../core/service/question.service";
import {map, Observable, switchMap} from "rxjs";
import {Quiz} from "../../../core/models/quiz";

@Component({
    selector: 'app-quiz-detail',
    templateUrl: './quiz-detail.component.html',
    styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent {
    quizId$: Observable<number> = this.route.params.pipe((params) => params.pipe(map((param) => param["id"])));
    Quiz$: Observable<Quiz> = this.quizId$.pipe(switchMap((id) => this.quizService.getQuizById(id)));

    constructor(private route: ActivatedRoute, private quizService: QuizService, private questionService: QuestionService) {

    }

}
