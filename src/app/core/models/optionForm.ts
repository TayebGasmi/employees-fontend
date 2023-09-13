import {FormField} from "./FormField";
import {Validators} from "@angular/forms";

export const OptionForm: FormField[] = [
    {
         name: 'optionText',
        type: 'text',
        label: 'Option Text',
        validators: [Validators.required],
        placeholder: 'Enter Option Text'
    },
    {
        name: 'correct', type: 'checkbox', label: 'Is Correct',
    }
]
