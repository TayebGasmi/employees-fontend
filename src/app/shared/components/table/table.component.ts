import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {TableColumnHeader} from "../../../core/models/tableColumnHeader";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
    @Input()
    dataSource?: any[]
    @Input()
    headers?: TableColumnHeader[]
    @ContentChild("actions", {static: true})
    actions?: TemplateRef<any>

    ngOnInit(): void {
        if (!this.headers && this.dataSource) {
            if (this.dataSource[0]) {
                this.headers = Object.keys(this.dataSource[0]).map(key => ({
                    dataKey: key
                }))
            }
        }
    }
}
