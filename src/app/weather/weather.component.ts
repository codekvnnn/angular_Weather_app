// src/app/weather/weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  city: string = 'London'; // Default city

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      (response) => {
        this.weather = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onCityChange(city: string): void {
    this.getWeather(city);
  }
}
