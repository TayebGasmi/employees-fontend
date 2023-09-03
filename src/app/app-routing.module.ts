import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./module/task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'skill',
    loadChildren: () => import('./module/skill/skill.module').then(m => m.SkillModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
