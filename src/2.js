"use strict";
/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// class Employee {
//   // Заповніть модифікатори доступу
//   name: string;
//   department: string;
//   salary: number;
//   constructor(name: string, department: string, salary: number) {
//     this.name = name;
//     this.department = department;
//     this.salary = salary;
//   }
//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }
// class Manager extends Employee {
//   // Реалізуйте конструктор та збільшіть salary на 10000
// }
// export {};
var Employee = /** @class */ (function () {
    function Employee(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Name: ".concat(this.name, ", Department: ").concat(this.department, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, 'Manager', salary + 10000) || this;
    }
    return Manager;
}(Employee));
