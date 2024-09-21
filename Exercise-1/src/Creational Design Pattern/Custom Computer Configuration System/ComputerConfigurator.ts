import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class ComputerConfigurator {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  createGamingPC(): Computer {
    return this.builder
      .setCPU('Intel i9')
      .setRAM('32GB')
      .setStorage('1TB NVMe SSD')
      .setGPU('NVIDIA RTX 3080')
      .addPeripheral('Gaming Mouse')
      .addPeripheral('Mechanical Keyboard')
      .build();
  }

  createWorkstation(): Computer {
    return this.builder
      .setCPU('AMD Threadripper')
      .setRAM('64GB')
      .setStorage('2TB NVMe SSD')
      .setGPU('NVIDIA Quadro')
      .addPeripheral('Dual Monitors')
      .build();
  }
}