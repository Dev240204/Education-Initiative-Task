import { TrafficLightState } from './TrafficLightState';
import { TrafficLight } from './TrafficLight';

export class RedLight implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  transitionToRed(): void {
    console.log("Light is already red");
  }

  transitionToYellow(): void {
    console.log("Transitioning from red to yellow");
    this.trafficLight.setState(new YellowLight(this.trafficLight));
  }

  transitionToGreen(): void {
    console.log("Cannot transition directly from red to green");
  }

  displayState(): void {
    console.log("Red Light - Stop!");
  }
}

export class YellowLight implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  transitionToRed(): void {
    console.log("Transitioning from yellow to red");
    this.trafficLight.setState(new RedLight(this.trafficLight));
  }

  transitionToYellow(): void {
    console.log("Light is already yellow");
  }

  transitionToGreen(): void {
    console.log("Transitioning from yellow to green");
    this.trafficLight.setState(new GreenLight(this.trafficLight));
  }

  displayState(): void {
    console.log("Yellow Light - Prepare to stop");
  }
}

export class GreenLight implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  transitionToRed(): void {
    console.log("Cannot transition directly from green to red");
  }

  transitionToYellow(): void {
    console.log("Transitioning from green to yellow");
    this.trafficLight.setState(new YellowLight(this.trafficLight));
  }

  transitionToGreen(): void {
    console.log("Light is already green");
  }

  displayState(): void {
    console.log("Green Light - Go!");
  }
}