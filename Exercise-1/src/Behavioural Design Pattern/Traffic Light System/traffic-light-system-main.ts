import { TrafficLight } from './TrafficLight';

const trafficLight = new TrafficLight();

trafficLight.displayState();
trafficLight.transitionToGreen();
trafficLight.transitionToYellow();
trafficLight.displayState();
trafficLight.transitionToRed();
trafficLight.displayState();
trafficLight.transitionToYellow();
trafficLight.transitionToGreen();
trafficLight.displayState();