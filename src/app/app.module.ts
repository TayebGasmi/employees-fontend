import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskModule } from './module/task/task.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
