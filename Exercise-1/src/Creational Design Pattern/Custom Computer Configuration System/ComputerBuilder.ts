import { Computer } from './Computer';

export interface ComputerBuilder {
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this;
  setGPU(gpu: string): this;
  addPeripheral(peripheral: string): this;
  build(): Computer;
}
