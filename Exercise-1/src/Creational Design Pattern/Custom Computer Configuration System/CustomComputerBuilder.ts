import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class CustomComputerBuilder implements ComputerBuilder {
  private cpu: string = 'Default CPU';
  private ram: string = '8GB';
  private storage: string = '256GB SSD';
  private gpu: string = 'Integrated Graphics';
  private peripherals: string[] = [];

  setCPU(cpu: string): this {
    this.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.storage = storage;
    return this;
  }

  setGPU(gpu: string): this {
    this.gpu = gpu;
    return this;
  }

  addPeripheral(peripheral: string): this {
    this.peripherals.push(peripheral);
    return this;
  }

  build(): Computer {
    return new Computer(this.cpu, this.ram, this.storage, this.gpu, this.peripherals);
  }
}