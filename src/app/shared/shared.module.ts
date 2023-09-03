import {CommonModule} from '@angular/common';
import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {ModalComponent} from './components/modal/modal.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TableComponent, ModalComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    ModalComponent,
    FormComponent
  ]
})
export class SharedModule {
}
