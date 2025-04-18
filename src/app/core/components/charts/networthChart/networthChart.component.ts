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
  @Input() State: boolean = true;
    
  chartData: IChartData[] = [];
  chartOption!: EChartsCoreOption;
  networth: number = 0;
  netlost: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateData(this.CategoriesUI)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CategoriesUI']) {
      this.updateData(this.CategoriesUI);
    } else if (changes['State']) {
      this.updateData(this.CategoriesUI);
    }
  }

  updateData(config: ICategories[]) {
    const curConfig = config.filter((item) => item.Category == this.State)
    this.chartData = curConfig.map(item => ({
      name: item.CardName,
      value: item.networth,
      itemStyle: {color: item.CardColor}
    }));
    this.calcNet(config)
    this.updateChart()
  }

  calcNet(data: ICategories[]) {
    this.networth = 0;
    this.netlost = 0;
    data.map(record => { //насрал
      if(record.Category == true) {
        this.netlost += record.networth
      } else if(record.Category == false){
        this.networth += record.networth
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
            \n{networth|${this.State == true ? this.netlost : this.networth} ₽}
            \n{netlost|${this.State == true ? this.networth : this.netlost} ₽}`,
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