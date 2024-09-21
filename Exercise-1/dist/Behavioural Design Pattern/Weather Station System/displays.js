"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsDisplay = exports.CurrentConditionsDisplay = void 0;
const WeatherStation_1 = require("./WeatherStation");
class CurrentConditionsDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.temperature = 0;
        this.humidity = 0;
        this.weatherStation.attach(this);
    }
    update(subject) {
        if (subject instanceof WeatherStation_1.WeatherStation) {
            this.temperature = subject.getTemperature();
            this.humidity = subject.getHumidity();
            this.display();
        }
    }
    display() {
        console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
class StatisticsDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.temperatures = [];
        this.weatherStation.attach(this);
    }
    update(subject) {
        if (subject instanceof WeatherStation_1.WeatherStation) {
            this.temperatures.push(subject.getTemperature());
            this.display();
        }
    }
    display() {
        const avg = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
        const max = Math.max(...this.temperatures);
        const min = Math.min(...this.temperatures);
        console.log(`Avg/Max/Min temperature = ${avg.toFixed(1)}/${max}/${min}`);
    }
}
exports.StatisticsDisplay = StatisticsDisplay;
