"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
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
exports.Student = Student;
