import {Component, Input} from '@angular/core';
import {OptionForm} from "../../../core/models/optionForm";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {OptionService} from "../../../core/service/option.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {BehaviorSubject, tap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent {

  protected readonly OptionForm = OptionForm;
  @Input()
  updateQuestions$?:BehaviorSubject<Question |null>
  constructor(private notificationService: NotificationService,
              private optionService: OptionService,) {
  }
  @Input() questionId!: number;
  addOption(form: FormGroup, modal: BsModalRef) {
    if(form.valid){
      this.optionService.addOptionToQuestion(form.value, this.questionId).pipe(
        tap(()=>{
          this.notificationService.showSuccess('Option added successfully', 'Success');
          this.updateQuestions$?.next(null);

        })
      ).subscribe(
        () => {
          modal.hide();
        }
      )
      return
    }
    this.notificationService.showError('Please fill in all fields', 'Error');
  }
}
