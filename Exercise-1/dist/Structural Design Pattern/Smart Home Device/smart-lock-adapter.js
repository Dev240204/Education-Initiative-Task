"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartLockAdapter = void 0;
class SmartLockAdapter {
    constructor(smartLock) {
        this.smartLock = smartLock;
    }
    turnOn() {
        this.smartLock.unlock();
    }
    turnOff() {
        this.smartLock.lock();
    }
    getStatus() {
        return this.smartLock.isLocked() ? 'Locked' : 'Unlocked';
    }
}
exports.SmartLockAdapter = SmartLockAdapter;
