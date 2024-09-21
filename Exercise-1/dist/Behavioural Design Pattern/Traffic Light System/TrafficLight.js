"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
const LightStates_1 = require("./LightStates");
class TrafficLight {
    constructor() {
        this.state = new LightStates_1.RedLight(this);
    }
    setState(state) {
        this.state = state;
    }
    transitionToRed() {
        this.state.transitionToRed();
    }
    transitionToYellow() {
        this.state.transitionToYellow();
    }
    transitionToGreen() {
        this.state.transitionToGreen();
    }
    displayState() {
        this.state.displayState();
    }
}
exports.TrafficLight = TrafficLight;
