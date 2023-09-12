import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    modalRef?: BsModalRef;
    @Input()
    title = 'modal';
    @ContentChild('modalBody') modalBody?: TemplateRef<any>
    @ContentChild('openButton') openButton?: TemplateRef<any>
    @Input() openButtonClass = 'btn btn-primary';
    @Input() openButtonLabel = 'open';

    constructor(private modalService: BsModalService) {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
