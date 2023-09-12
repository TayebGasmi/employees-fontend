import {Component, Input} from '@angular/core';
import {SkillForm} from "../../../core/models/SkillForm";
import {FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {SkillService} from "../../../core/service/skill.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {catchError, tap} from "rxjs";
import {Skill} from "../../../core/models/Skill";

@Component({
    selector: 'app-update-skill',
    templateUrl: './update-skill.component.html',
    styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent {
    @Input() skill?: Skill;
    protected readonly SkillForm = SkillForm;

    constructor(private skillService: SkillService, private notificationService: NotificationService) {
    }

    updateSkill(form: FormGroup, modal: BsModalRef) {

        if (form.invalid) {

            this.notificationService.showError(
                `Please fill all the required correctly fields`,
                'Error')
            return;
        }
        this.skillService.updateSkillById(this.skill?.id ?? 0, form.value).pipe(
            tap((value) => {
                this.notificationService.showWarning(
                    `${value.name} updated successfully`,
                    'updated'
                );
                modal.hide();
                this.skillService.updateSkills(value);
            }),
            catchError(
                (err) => {
                    this.notificationService.showError(
                        `Error while updating ${this.skill?.name}`,
                        'Error'
                    );
                    throw err;
                }
            )
        ).subscribe();
    }
}
