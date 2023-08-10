import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {TableColumnHeader} from "./core/models/tableColumnHeader";
import {Skill} from "./core/models/skill";
import {TableColumn} from "./core/models/tableColumn";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$:Observable<Skill[]>=of([{name:"react"},{name:"php"},{name:"react"},{name:"php"}])
  headers:TableColumnHeader[]=[{dataKey:'name'}]
  columns:TableColumn[]=[{dataKey:'name'}]

}
