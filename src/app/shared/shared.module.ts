import {CommonModule} from '@angular/common';
import {NgModule} from "@angular/core";
import {TableComponent} from "./components/table/table.component";
import {ModalComponent} from './components/modal/modal.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    declarations: [TableComponent, ModalComponent, FormComponent, NavbarComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        TableComponent,
        ModalComponent,
        FormComponent,
        NavbarComponent,
        SidebarComponent
    ]
})
export class SharedModule {
}
