"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([ 1, 6, 9, 8, 7, 1, -20, -3 ]);
// const charactersCollection = new CharactersCollection('Ahmed Hossam');
//
// const sortedNumbers = new Sorter(numbersCollection);
// const sortedCharacters = new Sorter(charactersCollection);
//
// sortedCharacters.sort();
// sortedNumbers.sort();
// console.log(charactersCollection.data);
// console.log(numbersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sortedLinkedList = new Sorter_1.Sorter(linkedList);
sortedLinkedList.sort();
linkedList.print();
