import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {SkillComponent} from "./skill/skill.component";

const routes: Routes = [

  {
    path: "skill",
    children:[
      {
        path:"ss",
        component:SkillComponent
      },
      {
        path: "quiz",
        component: QuizComponent,
      },

    ]

  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule {

}
