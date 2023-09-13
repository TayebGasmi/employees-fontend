import {Component, Input} from '@angular/core';
import {SkillService} from "../../../core/service/skill.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {BsModalRef} from "ngx-bootstrap/modal";
import {catchError, tap} from "rxjs";

@Component({
    selector: 'app-delete-skill',
    templateUrl: './delete-skill.component.html',
    styleUrls: ['./delete-skill.component.scss']
})
export class DeleteSkillComponent {
    @Input() skillId?: number;

    constructor(
        private skillService: SkillService, // Inject the skill service
        private notificationService: NotificationService // Inject the notification service
    ) {
    }

    deleteSkill(modal: BsModalRef) {
        if (this.skillId) {
            this.skillService.deleteSkillById(this.skillId).pipe(
                catchError((error) => {
                    this.notificationService.showError('Skill not deleted', 'Error');
                    return error
                })
                , tap(
                    () => {
                        modal.hide()
                        this.notificationService.showSuccess('Skill deleted successfully', 'Success');
                        this.skillService.updateSkills();
                    }
                )
            ).subscribe(
            );

        }
    }
}
