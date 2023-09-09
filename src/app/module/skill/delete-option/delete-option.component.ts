import {Component, Input} from '@angular/core';
import {NotificationService} from "../../../shared/service/notification.service";
import {OptionService} from "../../../core/service/option.service";

@Component({
  selector: 'app-delete-option',
  templateUrl: './delete-option.component.html',
  styleUrls: ['./delete-option.component.scss']
})
export class DeleteOptionComponent {
  constructor(private optionService: OptionService,private notificationService:NotificationService) {

  }
  @Input() optionId?: number;



}
