"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([1, 6, 9, 8, 7, 1, -20, -3]);
const sorted = new Sorter_1.Sorter(numbers);
sorted.sort();
console.log(numbers.data);
