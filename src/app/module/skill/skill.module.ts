import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillRoutingModule} from './skill-routing.module';
import {QuizComponent} from './quiz/quiz.component';
import {SkillComponent} from './skill/skill.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuizComponent,
    SkillComponent,

  ],
    imports: [
        CommonModule,
        SkillRoutingModule,
        SharedModule,
        HttpClientModule,
        PaginationModule,
        ReactiveFormsModule
    ],exports:[
    QuizComponent,
    SkillComponent
  ]
})
export class SkillModule { }
