import { WeatherStation } from './WeatherStation';
import { CurrentConditionsDisplay, StatisticsDisplay } from './displays';

const weatherStation = new WeatherStation();
const currentDisplay = new CurrentConditionsDisplay(weatherStation);
const statisticsDisplay = new StatisticsDisplay(weatherStation);

weatherStation.setMeasurements(80, 65, 30.4);
weatherStation.setMeasurements(82, 70, 29.2);
weatherStation.setMeasurements(78, 90, 29.2);
currentDisplay.display()
statisticsDisplay.display()