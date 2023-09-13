import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillRoutingModule} from './skill-routing.module';
import {QuizComponent} from './quiz/quiz.component';
import {SkillComponent} from './skill/skill.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {ReactiveFormsModule} from '@angular/forms';
import {AddSkillComponent} from './add-skill/add-skill.component';
import {UpdateSkillComponent} from './update-skill/update-skill.component';
import {AddQuizComponent} from './add-quiz/add-quiz.component';
import {UpdateQuizComponent} from './update-quiz/update-quiz.component';
import {QuizDetailComponent} from './quiz-detail/quiz-detail.component';
import {QuizQuestionComponent} from './quiz-question/quiz-question.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {QuestionComponent} from './question/question.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {UpdateQuestionComponent} from './update-question/update-question.component';
import {DeleteQuestionComponent} from './delete-question/delete-question.component';
import {DeleteOptionComponent} from './delete-option/delete-option.component';
import {UpdateOptionComponent} from './update-option/update-option.component';
import {DeleteSkillComponent} from './delete-skill/delete-skill.component';
import {DeleteQuizComponent} from './delete-quiz/delete-quiz.component';
import {AddOptionComponent} from './add-option/add-option.component';
import {QuizResponseComponent} from './quiz-response/quiz-response.component';
import {QuestionResponseComponent} from './question-response/question-response.component';
import {ResponseComponent} from './response/response.component';


@NgModule({
    declarations: [
        QuizComponent,
        SkillComponent,
        AddSkillComponent,
        UpdateSkillComponent,
        AddQuizComponent,
        UpdateQuizComponent,
        QuizDetailComponent,
        QuizQuestionComponent,
        AddQuestionComponent,
        QuestionComponent,
        UpdateQuestionComponent,
        DeleteQuestionComponent,
        DeleteOptionComponent,
        UpdateOptionComponent,
        DeleteSkillComponent,
        DeleteQuizComponent,
        AddOptionComponent,
        QuizResponseComponent,
        QuestionResponseComponent,
        ResponseComponent,

    ],
    imports: [
        CommonModule,
        SkillRoutingModule,
        SharedModule,
        HttpClientModule,
        PaginationModule,
        ReactiveFormsModule,
        CarouselModule
    ], exports: [
        QuizComponent,
        SkillComponent
    ]
})
export class SkillModule {
}
