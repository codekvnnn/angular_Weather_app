// src/app/weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  url: string = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.url}weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
