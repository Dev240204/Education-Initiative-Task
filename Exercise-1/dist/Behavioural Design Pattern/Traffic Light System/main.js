"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficLight_1 = require("./TrafficLight");
const trafficLight = new TrafficLight_1.TrafficLight();
trafficLight.displayState();
trafficLight.transitionToGreen();
trafficLight.transitionToYellow();
trafficLight.displayState();
trafficLight.transitionToRed();
trafficLight.displayState();
trafficLight.transitionToYellow();
trafficLight.transitionToGreen();
trafficLight.displayState();
