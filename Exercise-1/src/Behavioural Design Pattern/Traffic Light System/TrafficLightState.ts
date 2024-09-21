export interface TrafficLightState {
    transitionToRed(): void;
    transitionToYellow(): void;
    transitionToGreen(): void;
    displayState(): void;
  }