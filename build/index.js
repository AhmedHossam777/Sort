"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[i] > this.collection[j]) {
                        const temp = this.collection[i];
                        this.collection[i] = this.collection[j];
                        this.collection[j] = temp;
                    }
                }
                if (typeof (this.collection) === 'string') {
                    this.collection = this.collection.toLowerCase().split('').sort().join('');
                }
            }
        }
    }
}
exports.Sorter = Sorter;
const sorted = new Sorter('Ahmed Hossam');
sorted.sort();
console.log(sorted.collection);
