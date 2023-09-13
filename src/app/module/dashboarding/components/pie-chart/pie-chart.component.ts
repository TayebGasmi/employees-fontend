import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit,AfterViewInit{
      @ViewChild('myChart') chartElementRef!: ElementRef;

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    var chartElement = this.chartElementRef.nativeElement;
    var chart = echarts.init(chartElement);
    chart.setOption({   tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 17, name: 'To Do'},
            {value: 18, name: 'In Progress'},
            {value: 15, name: 'Under Review'},
            {value: 6, name: 'Test'},
            {value: 6, name: 'Done'}
          ]
        }
      ]})
  }

}
