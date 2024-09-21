"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModernSmartLock = void 0;
class ModernSmartLock {
    constructor() {
        this.locked = true;
    }
    lock() {
        this.locked = true;
        console.log('Smart lock engaged');
    }
    unlock() {
        this.locked = false;
        console.log('Smart lock disengaged');
    }
    isLocked() {
        return this.locked;
    }
}
exports.ModernSmartLock = ModernSmartLock;
