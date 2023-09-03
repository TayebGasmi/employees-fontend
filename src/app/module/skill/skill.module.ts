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
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionComponent } from './question/question.component';


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

  ],
  imports: [
    CommonModule,
    SkillRoutingModule,
    SharedModule,
    HttpClientModule,
    PaginationModule,
    ReactiveFormsModule
  ], exports: [
    QuizComponent,
    SkillComponent
  ]
})
export class SkillModule {
}
