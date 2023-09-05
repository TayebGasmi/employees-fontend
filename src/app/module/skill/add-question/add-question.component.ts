import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../shared/service/notification.service";
import {QuestionService} from "../../../core/service/question.service";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from 'rxjs/operators';
import {tap} from "rxjs";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {

  constructor(private notificationService:NotificationService,private fb:FormBuilder,private questionService:QuestionService,
              private route:ActivatedRoute) {
  }
  questionForm:FormGroup=this.fb.group({
    questionText:['',[Validators.required]],
    responseDescription:['',[Validators.required]],
    options:this.fb.array([])
  },{updateOn:'blur'});
  quizId$=this.route.params.pipe(map(params=>params["id"]));
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
    this.quizId$.pipe(
      switchMap(quizId=>this.questionService.addQuestionToQuizWithOptions(this.questionForm.value,quizId))
      ,tap(
        question=>{
          this.notificationService.showSuccess("Question added successfully","Success");
          this.questionForm.reset();
          this.optionsArray.clear();
        }
      )
    ).subscribe()
    }

  showFieldErrors(control: FormControl): boolean | undefined {
    return control?.invalid && (control?.dirty || control?.touched);
  }
}

