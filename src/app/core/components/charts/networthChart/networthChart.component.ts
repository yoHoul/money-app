import { Component, OnInit } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';

@Component({
  selector: 'app-networthChart',
  templateUrl: './networthChart.component.html',
  styleUrls: ['./networthChart.component.css'],
  standalone: false
})
export class NetworthChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  data: any = [
    { "name": "Еда", "value": 436 },
    { "name": "Еда2", "value": 123 },
    { "name": "Еда3", "value": 321 }
  ]

  chartOption: EChartsCoreOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          formatter: '{title|Расходы}\n{value|12 300 ₽}',
          show: true,
          fontSize: 30,
          position: 'center',
          rich: {
            title: {
              fontSize: 20,
              fontWeight: 'normal',
              color: '#999',
              align: 'center'
            },
            value: {
              fontSize: 28,
              fontWeight: 'bold',
              color: '#333',
              align: 'center',
              padding: [4, 0, 0, 0]
            }
          }
        },
        labelLine: {
          show: false
        },
        data: this.data
      }
    ]
  };

}

