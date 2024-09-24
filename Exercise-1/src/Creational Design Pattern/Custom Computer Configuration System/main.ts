import { CustomComputerBuilder } from './CustomComputerBuilder';
import { ComputerConfigurator } from './ComputerConfigurator';

const builder = new CustomComputerBuilder();
const configurator = new ComputerConfigurator(builder);

const gamingPC = configurator.createGamingPC();
console.log(gamingPC.describe());

const workstation = configurator.createWorkstation();
console.log(workstation.describe());

const customPC = builder
  .setCPU('AMD Ryzen 7')
  .setRAM('16GB')
  .setStorage('512GB NVMe SSD + 2TB HDD')
  .setGPU('AMD Radeon RX 6700 XT')
  .addPeripheral('Wireless Mouse')
  .addPeripheral('Ergonomic Keyboard')
  .addPeripheral('Webcam')
  .build();

console.log(customPC.describe());