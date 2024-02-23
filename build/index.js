"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterCollection_1 = require("./CharacterCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const numberCollection = new NumbersCollection_1.NumberCollection([9, -1, 5, 4, 3]);
const characterCollection = new CharacterCollection_1.CharacterCollection('Ahmed');
const sorter = new Sorter_1.Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data); // Adehm
