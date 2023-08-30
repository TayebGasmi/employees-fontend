import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { timestamp } from 'rxjs';
import { Sprint } from 'src/app/core/models/Sprint';
import { SprintServiceService } from 'src/app/core/service/sprint-service.service';

@Component({
  selector: 'app-add-sprint-modal',
  templateUrl: './add-sprint-modal.component.html',
  styleUrls: ['./add-sprint-modal.component.scss']
})
export class AddSprintModalComponent implements OnInit {
  sprint!:Sprint;


  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private spritService:SprintServiceService,
              private datePipe: DatePipe)
              {}

addSprintForm = this.fb.group({

sprintTitle: new FormControl('',Validators.required),
sprintDescription:new FormControl('',Validators.required),
startDate: new FormControl(''),
endDate:new FormControl('')

})

  ngOnInit() {

  }
onSubmit(myForm:FormGroup){
   this.sprint = myForm.value;

   console.log(this.sprint.startDate);
   this.spritService.saveSprint(this.sprint);
   this.bsModalRef.hide();
   window.location.reload();
}

}
