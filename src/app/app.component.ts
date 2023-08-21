import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, OnChanges, SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {TableColumnHeader} from "./core/models/tableColumnHeader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit{
  constructor(private cdr: ChangeDetectorRef) {}


  ngAfterViewInit(): void {
    this.headers = this.headers = [ {
      displayName:"ll",
      template: this.ageTemplate,
      dataKey: 'age'
    }];
    this.cdr.detectChanges()
  }
  @ViewChild("age")
  ageTemplate: TemplateRef<any> | undefined;

  data: any[] = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Carol', age: 28, email: 'carol@example.com' }
  ];

  headers: TableColumnHeader[] | undefined ;


}

