import {CommonModule} from '@angular/common';
import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {ModalComponent} from './components/modal/modal.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [TableComponent, ModalComponent, FormComponent, NavbarComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink
    ],
    exports: [
        TableComponent,
        ModalComponent,
        FormComponent,
        NavbarComponent
    ]
})
export class SharedModule {
}
