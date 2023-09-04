import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../shared/service/notification.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {

  constructor(private notificationService:NotificationService,private fb:FormBuilder) {
  }
  questionForm:FormGroup=this.fb.group({
    questionText:['',[Validators.required]],
    responseDescription:['',[Validators.required]],
    options:this.fb.array([])
  },{updateOn:'blur'});

  get optionsArray() {
    return this.questionForm.get('options') as FormArray;
  }

  addOption() {
        this.optionsArray.push(this.fb.group({
      optionText: ['', [Validators.required]],
      isCorrect: [false, [Validators.required]],
    }));
  }

  removeOption(index: number) {
        this.optionsArray.removeAt(index);
  }

  submit() {
    console.log(this.questionForm.value);
  }
  showFieldErrors(control: FormControl): boolean | undefined {
    return control?.invalid && (control?.dirty || control?.touched);
  }
}

