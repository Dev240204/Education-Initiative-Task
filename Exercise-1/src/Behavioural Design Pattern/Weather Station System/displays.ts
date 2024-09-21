import { Observer, Subject } from './interfaces';
import { WeatherStation } from './WeatherStation';

export class CurrentConditionsDisplay implements Observer {
  private temperature: number = 0;
  private humidity: number = 0;

  constructor(private weatherStation: WeatherStation) {
    this.weatherStation.attach(this);
  }

  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      this.temperature = subject.getTemperature();
      this.humidity = subject.getHumidity();
      this.display();
    }
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
  }
}

export class StatisticsDisplay implements Observer {
  private temperatures: number[] = [];

  constructor(private weatherStation: WeatherStation) {
    this.weatherStation.attach(this);
  }

  update(subject: Subject): void {
    if (subject instanceof WeatherStation) {
      this.temperatures.push(subject.getTemperature());
      this.display();
    }
  }

  display(): void {
    const avg = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    const max = Math.max(...this.temperatures);
    const min = Math.min(...this.temperatures);
    console.log(`Avg/Max/Min temperature = ${avg.toFixed(1)}/${max}/${min}`);
  }
}