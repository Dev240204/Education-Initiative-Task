export class Computer {
    constructor(
      public cpu: string,
      public ram: string,
      public storage: string,
      public gpu: string,
      public peripherals: string[]
    ) {}
  
    describe(): string {
      return `Computer with ${this.cpu} CPU, ${this.ram} RAM, ${this.storage} storage, ${this.gpu} GPU, and peripherals: ${this.peripherals.join(', ')}`;
    }
  }