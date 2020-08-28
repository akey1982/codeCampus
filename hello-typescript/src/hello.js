"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var s = new student_1.Student("Max", 123456);
var lable = s.getLable();
console.log(lable);
console.log("Hello TypeScript !");
