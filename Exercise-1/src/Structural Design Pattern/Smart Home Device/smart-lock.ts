import { SmartLock } from './smart-home-interfaces';

export class ModernSmartLock implements SmartLock {
  private locked: boolean = true;

  lock(): void {
    this.locked = true;
    console.log('Smart lock engaged');
  }

  unlock(): void {
    this.locked = false;
    console.log('Smart lock disengaged');
  }

  isLocked(): boolean {
    return this.locked;
  }
}