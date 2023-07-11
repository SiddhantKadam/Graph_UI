import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

interface Country {
	name: string;
	zone: string;
  region: string;
  team: string;
  month: string;
  royalty: string;
	population: string;
}

const COUNTRIES: Country[] = [
	{
		name: 'Piya Mukharjee',
	  zone: 'West',
    region: 'MUM',
		team: 'Marketing',
    month: 'Jan',
    royalty: '41,64,564',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Feb',
    royalty: '21,45,512',
		population: '6,896'
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '54,65,685',
		population: '2,462',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '32,45,545',
		population: '2,562',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '8,953',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
	{
		name: 'Piya Mukharjee',
		zone: 'West',
		region: 'MUM',
    team: 'Marketing',
    month: 'Mar',
    royalty: '21,45,512',
		population: '3,456',
	},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'littleMilleunium';
  sidebarExpanded = true;
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: any;
  page = 1;
	pageSize = 5;
	collectionSize = COUNTRIES.length;
	countries: Country[] | any;
  constructor() {
    this.refreshCountries();
    this.chartOptions = {
      series: [
        {
          name: "RPC",
          data: [80, 240, 300, 200, 200, 300, 270, 230, 160, 160, 250, 200]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        logBase: 100,
        tickAmount: 4,
        min: 0,
        max: 400,
        axisBorder: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  refreshCountries() {
		this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}




