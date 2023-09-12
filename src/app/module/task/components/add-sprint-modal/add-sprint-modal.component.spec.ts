import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSprintModalComponent} from './add-sprint-modal.component';

describe('AddSprintModalComponent', () => {
    let component: AddSprintModalComponent;
    let fixture: ComponentFixture<AddSprintModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddSprintModalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddSprintModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
