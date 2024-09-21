"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
class WeatherStation {
    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('WeatherStation: Observer has been attached already.');
        }
        this.observers.push(observer);
        console.log('WeatherStation: Attached an observer.');
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('WeatherStation: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('WeatherStation: Detached an observer.');
    }
    notify() {
        console.log('WeatherStation: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    setMeasurements(temperature, humidity, pressure) {
        console.log('WeatherStation: Weather conditions have changed.');
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notify();
    }
    getTemperature() {
        return this.temperature;
    }
    getHumidity() {
        return this.humidity;
    }
    getPressure() {
        return this.pressure;
    }
}
exports.WeatherStation = WeatherStation;
