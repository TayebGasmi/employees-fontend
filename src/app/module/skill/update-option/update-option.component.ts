import {Component, Input} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {BehaviorSubject, tap} from "rxjs";
import {Question} from "../../../core/models/question";
import {BsModalRef} from "ngx-bootstrap/modal";
import {OptionService} from "../../../core/service/option.service";
import {Option} from "../../../core/models/option";
import {OptionForm} from "../../../core/models/optionForm";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-update-option',
    templateUrl: './update-option.component.html',
    styleUrls: ['./update-option.component.scss']
})
export class UpdateOptionComponent {
    @Input() updateQuestions$?: BehaviorSubject<Question | null>;
    @Input() option?: Option
    protected readonly OptionForm = OptionForm;

    constructor(private notificationService: NotificationService, private optionService: OptionService) {

    }

    updateOption(form: FormGroup, modal: BsModalRef) {
        if (form.invalid) {

            this.notificationService.showError(
                `Please fill all the required correctly fields`,
                'Error')
            return;
        }

        if (this.option?.id)
            this.optionService.updateOptionById(form.value, this.option?.id).pipe(
                tap(() => {
                        this.notificationService.showWarning(
                            `option updated successfully`,
                            'updated');
                        this.updateQuestions$?.next(null);
                        modal.hide();
                    }
                )
            ).subscribe();
    }
}

