import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {SkillComponent} from "./skill/skill.component";
import {QuizDetailComponent} from "./quiz-detail/quiz-detail.component";
import {QuizQuestionComponent} from "./quiz-question/quiz-question.component";

const routes: Routes = [

  {
    path: "",
    children: [
      {
        path: "",
        component: SkillComponent,
        pathMatch: "full"
      },
      {
        path: "quiz/:id",
        component: QuizComponent,
      },
      {
        path: "quiz/detail/:id",
        component: QuizDetailComponent,
      },
      {
        path: "quiz/question/:id",
        component: QuizQuestionComponent,
      }

    ],


  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule {

}
