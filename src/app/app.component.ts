import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Validators} from "@angular/forms";
import {FormField} from "./core/models/FormField";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {


    fields: FormField[] = [
        {name: 'name', type: 'text', label: 'Name', validators: [Validators.required]},
        {name: 'email', type: 'email', label: 'Email', validators: [Validators.required, Validators.email]},
        {name: 'password', type: 'password', label: 'Password', validators: [Validators.required, Validators.minLength(6)]},
        {name: 'age', type: 'number', label: 'Age', validators: [Validators.required, Validators.min(18)]},
        {name: 'date', type: 'date', label: 'Date', validators: [Validators.required]},
        {
            name: 'select',
            type: 'select',
            label: 'Select',
            validators: [Validators.required],
            options: [{label: 'Option 1', value: '1'}, {label: 'Option 2', value: '2'}],
            placeholder: 'Select an option'
        },
        {name: 'checkbox', type: 'checkbox', label: 'Checkbox', validators: [Validators.required]},
        {
            name: 'radio',
            type: 'radio',
            label: 'Radio',
            validators: [Validators.required],
            options: [{label: 'Option 1', value: '1'}, {label: 'Option 2', value: '2'}]
        },
        {name: 'textarea', type: 'textarea', label: 'Textarea', validators: [Validators.required]},

    ]


}

