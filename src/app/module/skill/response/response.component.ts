import {Component, Input} from '@angular/core';
import {Question} from "../../../core/models/question";

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.scss']
})
export class ResponseComponent {
    @Input() question?: Question;
    @Input() index = 0;

}
