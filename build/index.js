"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numberCollection = new NumbersCollection_1.NumberCollection([9, -1, 5, 4, 3]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
