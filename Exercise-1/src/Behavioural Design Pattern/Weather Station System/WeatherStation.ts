import { Subject, Observer } from './interfaces';

export class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('WeatherStation: Observer has been attached already.');
    }
    this.observers.push(observer);
    console.log('WeatherStation: Attached an observer.');
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('WeatherStation: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('WeatherStation: Detached an observer.');
  }

  notify(): void {
    console.log('WeatherStation: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    console.log('WeatherStation: Weather conditions have changed.');
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}