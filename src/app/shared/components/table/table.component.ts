import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable, of} from "rxjs";
import {TableColumnHeader} from "../../../core/models/tableColumnHeader";
import {TableColumn} from "../../../core/models/tableColumn";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  @Input()
  data$: Observable<any[]>  = of([])
  @Input()
  columns: TableColumn[] = []
  @Input()
  headers:TableColumnHeader[]=[]


}
