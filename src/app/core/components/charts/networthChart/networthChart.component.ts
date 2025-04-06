import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { ICategories, IChartData } from 'src/app/shared/types/i-category-card';

@Component({
  selector: 'app-networthChart',
  templateUrl: './networthChart.component.html',
  styleUrls: ['./networthChart.component.scss'],
  standalone: false
})
export class NetworthChartComponent implements OnInit {

  @Input() CategoriesUI: ICategories[] = [];
  @Input() State!: boolean;
    
  chartData: IChartData[] = [];
  chartOption!: EChartsCoreOption;
  networth: number = 0;
  netlost: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CategoriesUI'] && this.CategoriesUI?.length) {
      this.updateData(this.CategoriesUI);
    }
    if (changes['State']) {
      this.updateData(this.CategoriesUI);
    }
  }

  updateData(config: ICategories[]) {
    this.chartData = config.map(item => ({
      name: item.CardName,
      value: item.networth,
    }));
    this.calcNet(config)
    this.updateChart()
  }

  calcNet(data: ICategories[]) {
    this.networth = 0;
    this.netlost = 0;
    data.map(record => {
      if(record.Category == true) {
        this.networth += record.networth
      } else if(record.Category == false){
        this.netlost += record.networth
      }
    })
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
            formatter: `{title|${this.State == true ? "Расходы": "Прибыль"}}
            \n{networth|${this.State == true ? this.networth : this.netlost} ₽}
            \n{netlost|${this.State == true ? this.netlost : this.networth} ₽}`,
            show: true,
            fontSize: 30,
            position: 'center',
            rich: {
              title: {
                fontSize: 28,
                fontWeight: 'normal',
                color: 'grey',
                align: 'center'
              },
              networth: {
                fontSize: 34,
                fontWeight: 'bold',
                color: this.State == true ? '#ff0000' : '#09ff00',
                align: 'center',
              },
              netlost: {
                fontSize: 24,
                color: this.State == true ? '#8df589' : '#fc5b5b',
                fontWeight: 'bold',
                align: 'center',
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