import { TrafficLightState } from './TrafficLightState';
import { RedLight, YellowLight, GreenLight } from './LightStates';

export class TrafficLight {
  private state: TrafficLightState;

  constructor() {
    this.state = new RedLight(this);
  }

  setState(state: TrafficLightState): void {
    this.state = state;
  }

  transitionToRed(): void {
    this.state.transitionToRed();
  }

  transitionToYellow(): void {
    this.state.transitionToYellow();
  }

  transitionToGreen(): void {
    this.state.transitionToGreen();
  }

  displayState(): void {
    this.state.displayState();
  }
}