import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModule } from './module/task/task.module';
import {SharedModule} from "./shared/shared.module";
import {SkillModule} from "./module/skill/skill.module";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskModule,
    SharedModule,
    SkillModule,
    ToastrModule.forRoot({closeButton:true,enableHtml:true,progressBar:true}),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
