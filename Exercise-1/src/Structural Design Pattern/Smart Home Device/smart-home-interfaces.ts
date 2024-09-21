export interface SmartHomeDevice {
    turnOn(): void;
    turnOff(): void;
    getStatus(): string;
  }
  
  export interface LegacyThermostat {
    activate(): void;
    deactivate(): void;
    getCurrentTemperature(): number;
  }
  
  export interface SmartLock {
    lock(): void;
    unlock(): void;
    isLocked(): boolean;
  }