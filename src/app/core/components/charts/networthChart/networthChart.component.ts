import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { ICategories, IChartData } from 'src/app/shared/types/i-category-card';

@Component({
  selector: 'app-networthChart',
  templateUrl: './networthChart.component.html',
  styleUrls: ['./networthChart.component.css'],
  standalone: false
})
export class NetworthChartComponent implements OnInit {

  @Input() CategoriesUI: ICategories[] = [];
    
  chartData: IChartData[] = [];
  chartOption!: EChartsCoreOption;
  networth: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CategoriesUI'] && this.CategoriesUI?.length) {
      this.updateData(this.CategoriesUI);
    }
  }

  updateData(config: ICategories[]) {
    this.chartData = config.map(item => ({
      name: item.CardName,
      value: item.networth,
    }));
    this.calcNetworth(this.chartData)
    this.updateChart()
  }

  calcNetworth(data: IChartData[]) {
    this.networth = data.reduce((sum, record) => sum + record.value, 0);
  }

  updateChart() {
    this.chartOption = {
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
            formatter: `{title|Расходы}\n{value|${this.networth} ₽}`,
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
          data: this.chartData
        }
      ]
    };
  }

}