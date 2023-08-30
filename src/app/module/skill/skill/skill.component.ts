import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SkillService} from "../../../core/service/skill.service";
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    Observable,
    startWith,
    switchMap,
    tap
} from "rxjs";
import {Skill} from "../../../core/models/Skill";
import {Page} from "../../../core/models/Page";
import {FormControl} from "@angular/forms";
import {NotificationService} from "../../../shared/service/notification.service";
import {TableColumnHeader} from "../../../core/models/tableColumnHeader";

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class SkillComponent  {
    constructor(private skillService: SkillService,private notificationService:NotificationService) {
    }
    deleteSkill$: BehaviorSubject<Skill | null> = new BehaviorSubject<Skill | null>(null);
    paginationDefaults = {
        currentSize: 5,
        currentPage: 1,
        sizeOptions:[1,5,10,25],
        maxSize:10
    };
    skillHeaders:TableColumnHeader[]=[{
        dataKey:'name'
    },{
        dataKey:'description'
    }]
    size = new FormControl(this.paginationDefaults.currentSize);
    size$ = this.size.valueChanges.pipe(
        startWith(5),
        debounceTime(300),
        distinctUntilChanged()
    );

    currentPage = new FormControl(this.paginationDefaults.currentPage);
    currentPage$ = this.currentPage.valueChanges.pipe(
        startWith(1),
        debounceTime(300),
        distinctUntilChanged(),
        map(page => page ? page - 1 : 0)
    );
    name = new FormControl("");
    search$ = this.name.valueChanges.pipe(
        debounceTime(2000),
        distinctUntilChanged()
    );

    skills$: Observable<Page<Skill>>  = combineLatest([this.currentPage$, this.size$,this.deleteSkill$]).pipe(
        switchMap(([page, size]) => this.skillService.getAllSkills(page ?? 0, size ?? 10)),
        tap(page => this.totalItems$.next(page.totalElements))
    );
    totalItems$:BehaviorSubject<number>=new BehaviorSubject(100)

    deleteSkill(skill: Skill) {
        this.skillService.deleteSkillById(skill.id).pipe(
            debounceTime(500),
            tap(() => {
                this.notificationService.showError(
                    `${skill.name} deleted successfully`,
                    'deleted'
                );
                this.deleteSkill$.next(skill);
            })
        ).subscribe();
    }
}
