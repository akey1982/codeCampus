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
var Student = /** @class */ (function () {
    function Student(name, maNum) {
        this.name = name;
        this.maNum = maNum;
    }
    Student.prototype.getLable = function () {
        return "Student " + this.name + " mit Matrikelnummer: " + this.maNum;
    };
    return Student;
}());
var s = new Student("Max", 123456);
var lable = s.getLable();
console.log(lable);
console.log("Hello TypeScript !");
