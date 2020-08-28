export class Student {
    constructor(public name: string, public maNum: number) {}
  
    getLable(): string {
      return `Student ${this.name} mit Matrikelnummer: ${this.maNum}`;
    }
  }