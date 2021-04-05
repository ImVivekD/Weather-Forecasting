import { Component, OnInit } from '@angular/core';
import { ForecastingService } from './forecasting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'WeatherForecast';
  weatherData: any;

  constructor(private forecasting: ForecastingService) {

  }

  ngOnInit() {
    this.forecasting.getForecasting()
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        console.log(error);
      })
  }
}
