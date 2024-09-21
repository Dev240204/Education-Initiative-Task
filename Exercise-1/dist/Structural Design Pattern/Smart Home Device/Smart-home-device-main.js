"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smart_home_system_1 = require("./smart-home-system");
const legacy_thermostat_1 = require("./legacy-thermostat");
const smart_lock_1 = require("./smart-lock");
const thermostat_adapter_1 = require("./thermostat-adapter");
const smart_lock_adapter_1 = require("./smart-lock-adapter");
const smartHome = new smart_home_system_1.SmartHomeSystem();
const oldThermostat = new legacy_thermostat_1.OldThermostat();
const thermostatAdapter = new thermostat_adapter_1.ThermostatAdapter(oldThermostat);
smartHome.addDevice('Living Room Thermostat', thermostatAdapter);
const smartLock = new smart_lock_1.ModernSmartLock();
const smartLockAdapter = new smart_lock_adapter_1.SmartLockAdapter(smartLock);
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
