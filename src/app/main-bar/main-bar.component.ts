import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {

  chart = [];
  constructor() { }

  ngOnInit(): void {
  }
  public topChart: GoogleChartInterface = {
    chartType: 'AreaChart',
    dataTable: [
      ['Task', 'Payment'],
      ['Work',     3],
      ['Work',     3],
      ['Eat',      2],
      ['Eat',      2.3],
      ['Commute',  2.6],    ['Sleep',    3]
    ],
    //firstRowIsData: true,
    // options: {'title': 'Tasks'},
    options : {
      // title: 'Payment',
      hAxis: { textPosition: 'none', textStyle:{color: 'snow'} },
      vAxis: {minValue: 0, textPosition: 'none' },
      chartArea:{left:30,top:0,width:"10px",height:"10px"}
      ,height: 50
      ,width: 120
      // colors: ['blue', 'red', 'green', 'yellow', 'gray']
    }
  };
  public mainChart: GoogleChartInterface = {
    chartType: 'AreaChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    // firstRowIsData: true,
    options : {
      title: 'Payment',
      hAxis: { textPosition: 'none', textStyle:{color: 'snow'} },
      vAxis: {minValue: 0, textPosition: 'none' },
      chartArea:{left:30,top:0,width:"80%",height:"100%"}
      ,height: 800
      ,width: 800
      // colors: ['blue', 'red', 'green', 'yellow', 'gray']
    }
  };

  public rowChart: GoogleChartInterface = {
    chartType: 'AreaChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     3],
      ['Eat',      2],
      ['Commute',  2.3],    ['Sleep',    3]
    ],
    //firstRowIsData: true,
    // options: {'title': 'Tasks'},
    options : {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333eee'}},
      vAxis: {minValue: 0}
    }
  };

  canvas: any;
  canv: any;
  ctx: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: 'Today: 5, Aug 2018',
              data: [5,2,3, 8, 6, 17, 23, 18, 27, 17],
              backgroundColor: [
                  '#6a93df',
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: false
          }],
        }
      },
    });
  }



}
