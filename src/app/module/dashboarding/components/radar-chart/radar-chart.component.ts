import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as echarts from "echarts";
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements AfterViewInit{
  @ViewChild('myChart') chartElementRef!: ElementRef;

  ngAfterViewInit(): void {
    var chartElement = this.chartElementRef.nativeElement;
    var chart = echarts.init(chartElement);
    chart.setOption( {

      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'To Do', max: 6500 },
          { name: 'In Progress', max: 16000 },
          { name: 'Under Review', max: 30000 },
          { name: 'Test', max: 38000 },
          { name: 'Done', max: 52000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    });
  }

}
