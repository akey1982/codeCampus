/*
slide/3/4/7
export class Student {
  getLable(lable: number): string {
    return `Student mit Matrikelnummer: ${lable}`;
  }
}

let s: Student = new Student();
let lable: string = s.getLable(1223456);
console.log(lable);

console.log("Hello TypeScript !");*/

import { Student } from "./student";



let s: Student = new Student("Max", 123456);
let lable: string = s.getLable();

console.log(lable);

console.log("Hello TypeScript !");
