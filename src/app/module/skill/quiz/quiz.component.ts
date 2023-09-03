import {Component} from '@angular/core';
import {QuizService} from "../../../core/service/quiz.service";
import {NotificationService} from "../../../shared/service/notification.service";
import {TableColumnHeader} from "../../../core/models/tableColumnHeader";
import {FormControl} from "@angular/forms";
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
import {Page} from "../../../core/models/Page";
import {Quiz} from "../../../core/models/quiz";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  skillId$ = this.route.params.pipe(
    map(params => params["id"])
  )
  updateQuizzes$ = this.quizService.updateQuizzes$;
  paginationDefaults = {
    currentSize: 5,
    currentPage: 1,
    sizeOptions: [1, 5, 10, 25],
    maxSize: 10,
  };
  quizHeaders: TableColumnHeader[] = [
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
  quizzes$: Observable<Page<Quiz>> = combineLatest([
    this.currentPage$,
    this.size$,
    this.updateQuizzes$,
    this.search$,
    this.skillId$
  ]).pipe(
    switchMap(([page, size, _, name, skillId]) => {
      if (name && name !== '' && skillId !== undefined) {
        return this.quizService.getQuizBySkillIdAndName(skillId, name, page ?? 0, size ?? 10)
      }
      return this.quizService.getQuizzesBySkill(skillId, page ?? 0, size ?? 10)
    }),
    tap((page) => this.totalItems$.next(page.totalElements))
  );

  constructor(private quizService: QuizService, private notificationService: NotificationService, private route: ActivatedRoute) {
  }

  deleteQuiz(quiz: Quiz) {
    this.quizService
      .deleteQuizById(quiz.id)
      .pipe(
        debounceTime(500),
        tap(() => {
          this.notificationService.showError(
            `${quiz.name} deleted successfully`,
            'deleted'
          );
          this.quizService.updateQuizzes(quiz);
        })
      )
      .subscribe();
  }


}
