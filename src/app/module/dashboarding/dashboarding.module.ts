import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { StackedLineChartComponent } from './components/stacked-line-chart/stacked-line-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';


@NgModule({
    declarations: [
    DashboardPageComponent,
    TopWidgetComponent,
    PieChartComponent,
    StackedLineChartComponent,
    RadarChartComponent
  ],
    imports: [
        CommonModule
    ],
  exports:[
    DashboardPageComponent
  ]
})
export class DashboardingModule {
}
