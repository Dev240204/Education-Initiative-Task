import { SmartHomeSystem } from './smart-home-system';
import { OldThermostat } from './legacy-thermostat';
import { ModernSmartLock } from './smart-lock';
import { ThermostatAdapter } from './thermostat-adapter';
import { SmartLockAdapter } from './smart-lock-adapter';

const smartHome = new SmartHomeSystem();

const oldThermostat = new OldThermostat();
const thermostatAdapter = new ThermostatAdapter(oldThermostat);
smartHome.addDevice('Living Room Thermostat', thermostatAdapter);

const smartLock = new ModernSmartLock();
const smartLockAdapter = new SmartLockAdapter(smartLock);
smartHome.addDevice('Front Door Lock', smartLockAdapter);

console.log('Initial status:');
console.log(smartHome.getDeviceStatus('Living Room Thermostat'));
console.log(smartHome.getDeviceStatus('Front Door Lock'));

smartHome.turnOnDevice('Living Room Thermostat');
smartHome.turnOnDevice('Front Door Lock');

console.log('\nAfter turning on:');
console.log(smartHome.getDeviceStatus('Living Room Thermostat'));
console.log(smartHome.getDeviceStatus('Front Door Lock'));

smartHome.turnOffDevice('Front Door Lock');

console.log('\nAfter locking the door:');
console.log(smartHome.getDeviceStatus('Front Door Lock'));