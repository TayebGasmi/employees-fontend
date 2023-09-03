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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {
  updateSkills$ = this.skillService.updateSkills$;
  paginationDefaults = {
    currentSize: 5,
    currentPage: 1,
    sizeOptions: [1, 5, 10, 25],
    maxSize: 10,
  };
  skillHeaders: TableColumnHeader[] = [
    {
      dataKey: 'name',
    },
    {
      dataKey: 'description',
    },
  ];
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
    map((page) => (page ? page - 1 : 0))
  );
  name = new FormControl('');
  search$ = this.name.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    startWith(''),
  );
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(100);
  skills$: Observable<Page<Skill>> = combineLatest([
    this.currentPage$,
    this.size$,
    this.updateSkills$,
    this.search$
  ]).pipe(
    switchMap(([page, size, _, name]) => {
      if (name) {
        // If there's a search term, use the searchSkills method
        return this.searchSkills(name, page ?? 0, size ?? 10);
      } else {
        // If no search term, use the getAllSkills method
        return this.skillService.getAllSkills(page ?? 0, size ?? 10);
      }
    }),
    tap((page) => this.totalItems$.next(page.totalElements))
  );

  constructor(private skillService: SkillService, private notificationService: NotificationService) {
  }

  deleteSkill(skill: Skill) {
    this.skillService
      .deleteSkillById(skill.id)
      .pipe(
        debounceTime(500),
        tap(() => {
          this.notificationService.showError(
            `${skill.name} deleted successfully`,
            'deleted'
          );
          this.skillService.updateSkills(skill);
        })
      )
      .subscribe();
  }

  searchSkills(name: string, page: number, size: number): Observable<Page<Skill>> {
    return this.skillService.searchSkills(name, page, size);
  }

}
