import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormField} from "../../../core/models/FormField";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  fields: FormField[] = [];
  form: FormGroup = new FormGroup({});
  @Input()
  formData: any = {};
  @ContentChild('formButtons')
  formButtons?: TemplateRef<any>;

  ngOnInit(): void {
    this.initForm();

  }

  initForm() {
    this.fields.forEach(field => {
      let fieldValue = this.formData.hasOwnProperty(field.name) ? this.formData[field.name] : '';
      let formControl = new FormControl(fieldValue, field.validators, field.asyncValidators);
      this.form.addControl(field.name, formControl);
    });
  }

  showFieldErrors(fieldName: string): boolean | undefined {
    const control = this.form.get(fieldName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
