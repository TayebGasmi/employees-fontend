import {Component, Input} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {OptionService} from "../../../core/service/option.service";
import {BsModalRef} from "ngx-bootstrap/modal";
import {BehaviorSubject, catchError, debounceTime, distinctUntilChanged, Observable, of, switchMap, tap} from "rxjs";
import {Question} from "../../../core/models/question";

@Component({
    selector: 'app-delete-option',
    templateUrl: './delete-option.component.html',
    styleUrls: ['./delete-option.component.scss']
})
export class DeleteOptionComponent {
    @Input() optionId?: number;
    @Input() updateQuestions$?: BehaviorSubject<Question | null>;

    constructor(private optionService: OptionService, private notificationService: NotificationService) {

    }

    delete(modal: BsModalRef) {
        if (this.optionId) {
            const delete$: Observable<number> = of(this.optionId).pipe(
                distinctUntilChanged(),
                debounceTime(1000),
                switchMap((id: number) => this.optionService.deleteOptionById(id)),
                tap(() => this.notificationService.showSuccess('Option deleted successfully', 'Success')),
                tap(() => this.updateQuestions$?.next(null)),
                catchError(err => {
                        this.notificationService.showError('Option not deleted', 'Error');
                        throw err;
                    }
                )
            );
            delete$.subscribe(() => modal.hide())

        }
    }
}
