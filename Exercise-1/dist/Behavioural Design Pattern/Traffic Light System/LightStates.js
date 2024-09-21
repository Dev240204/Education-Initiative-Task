"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenLight = exports.YellowLight = exports.RedLight = void 0;
class RedLight {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    transitionToRed() {
        console.log("Light is already red");
    }
    transitionToYellow() {
        console.log("Transitioning from red to yellow");
        this.trafficLight.setState(new YellowLight(this.trafficLight));
    }
    transitionToGreen() {
        console.log("Cannot transition directly from red to green");
    }
    displayState() {
        console.log("Red Light - Stop!");
    }
}
exports.RedLight = RedLight;
class YellowLight {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    transitionToRed() {
        console.log("Transitioning from yellow to red");
        this.trafficLight.setState(new RedLight(this.trafficLight));
    }
    transitionToYellow() {
        console.log("Light is already yellow");
    }
    transitionToGreen() {
        console.log("Transitioning from yellow to green");
        this.trafficLight.setState(new GreenLight(this.trafficLight));
    }
    displayState() {
        console.log("Yellow Light - Prepare to stop");
    }
}
exports.YellowLight = YellowLight;
class GreenLight {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    transitionToRed() {
        console.log("Cannot transition directly from green to red");
    }
    transitionToYellow() {
        console.log("Transitioning from green to yellow");
        this.trafficLight.setState(new YellowLight(this.trafficLight));
    }
    transitionToGreen() {
        console.log("Light is already green");
    }
    displayState() {
        console.log("Green Light - Go!");
    }
}
exports.GreenLight = GreenLight;
