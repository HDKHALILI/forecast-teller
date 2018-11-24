import React, { Component } from 'react';

import Header from './Header';
import Results from './Results';

import getLatLang from '../utils/geocode-api';
import getWeather  from '../utils/weather-api';

class App extends Component {

  state = {
    location: '',
    currently: {
      time: '',
      temperature: '',
      icon: '',
      windSpeed: '',
      humidity: '',
      rain: '',
      sunrise: '',
      sunset: '',
      summary: ''
    },
    hourly: [],
    daily: []

  }

  handleSubmit = (location) => {
    getLatLang(location)
      .then((locationData) => {
        this.setState(() => ( {location: locationData.name} ))
        getWeather(locationData)
          .then(({data}) => this.setState(() => {
              const { currently } = data;

              const hourly = data.hourly.data
                .slice(0, 7).map((hourly) => ({
                    time: hourly.time,
                    icon: hourly.icon,
                    temperature: hourly.temperature,
                    rain: Math.round(hourly.precipIntensity * 100) / 100,
                    windSpeed: hourly.windSpeed,
                    humidity: Math.floor(hourly.humidity * 100)
                }))

              const daily = data.daily.data
                .slice(0, 7).map((daily) => ({
                  time: daily.time,
                  icon: daily.icon,
                  temperature: daily.temperatureHigh,
                  humidity: Math.floor(daily.humidity * 100),
                  rain: Math.round(daily.precipIntensity * 100) / 100,
                  sunrise: daily.sunriseTime,
                  sunset: daily.sunsetTime,
                  windSpeed: daily.windSpeed,
                  summary: daily.summary
                }))
                console.log(daily)
              return {
                currently: {
                  time: currently.time,
                  temperature: currently.temperature,
                  icon: currently.icon,
                  windSpeed: currently.windSpeed,
                  humidity: Math.floor(currently.humidity * 100),
                  rain: Math.round(currently.precipIntensity * 100) / 100,
                  summary: data.hourly.summary,
                  sunrise: data.daily.data[0].sunriseTime,
                  sunset: data.daily.data[0].sunsetTime
                },
                hourly,
                daily
              }
          }))
          .catch((error) => console.log(error))
      });
  }


  render() {
    return (
      <div className="container">
        <Header handleSubmit={this.handleSubmit}/>
        <Results data={this.state}/>
      </div>
    );
  }
}

export default App;
