import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ForecastingService {

  constructor(private http: HttpClient) {

  }

  getForecasting() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=7f24679d3796cb5ffbe5fa6bb5f57c9a');
  }
}
