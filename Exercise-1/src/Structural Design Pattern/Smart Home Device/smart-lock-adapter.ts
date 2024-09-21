import { SmartHomeDevice, SmartLock } from './smart-home-interfaces';

export class SmartLockAdapter implements SmartHomeDevice {
  constructor(private smartLock: SmartLock) {}

  turnOn(): void {
    this.smartLock.unlock();
  }

  turnOff(): void {
    this.smartLock.lock();
  }

  getStatus(): string {
    return this.smartLock.isLocked() ? 'Locked' : 'Unlocked';
  }
}