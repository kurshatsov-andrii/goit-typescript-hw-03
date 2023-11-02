"use strict";
// const key = new Key();
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
// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);
// export {};
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.tenants = [];
        this.key = key;
    }
    House.prototype.comeIn = function (person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Ви ввійшли до будинку.');
        }
        else {
            console.log('Двері закриті. Ввійти неможливо.');
        }
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Двері відчинено.');
        }
        else {
            console.log('Ключ не підходить. Двері залишаються закритими.');
        }
    };
    return MyHouse;
}(House));
var key = new Key();
var house = new MyHouse(key);
var person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
