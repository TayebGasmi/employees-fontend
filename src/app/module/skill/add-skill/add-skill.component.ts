import {Component} from '@angular/core';
import {SkillService} from "../../../core/service/skill.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {SkillForm} from "../../../core/models/SkillForm";
import {debounceTime, tap} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-add-skill',
    templateUrl: './add-skill.component.html',
    styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent {
    protected readonly SkillForm = SkillForm;

    constructor(private skillService: SkillService, private notificationService: NotificationService) {
    }

    addSkill(form: FormGroup, modal: BsModalRef) {

        if (form.invalid) {

            this.notificationService.showError(
                `Please fill all the required correctly fields`,
                'Error')
            return;
        }
        this.skillService.addSkill(form.value).pipe(
            debounceTime(500),
            tap((value) => {
                modal.hide();
                this.skillService.updateSkills(value);
                this.notificationService.showSuccess(
                    `Skill ${value.name} added successfully`,
                    'Success')
            })
        ).subscribe();
    }
}
