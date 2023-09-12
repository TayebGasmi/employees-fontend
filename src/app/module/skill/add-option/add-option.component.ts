import {Component} from '@angular/core';
import {OptionForm} from "../../../core/models/optionForm";
import {add} from "ngx-bootstrap/chronos";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
    selector: 'app-add-option',
    templateUrl: './add-option.component.html',
    styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent {

    protected readonly OptionForm = OptionForm;

    addOption(form: FormGroup, modal: BsModalRef) {

    }
}
