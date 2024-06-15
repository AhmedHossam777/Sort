"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = i + 1; j < this.collection.length; j++) {
                let temp = 0;
                if (this.collection[i] > this.collection[j]) {
                    temp = this.collection[i];
                    this.collection[i] = this.collection[j];
                    this.collection[j] = temp;
                }
            }
        }
    }
}
exports.Sorter = Sorter;
const sorted = new Sorter([5, 2, 9, 7, -1]);
sorted.sort();
console.log(sorted.collection);
