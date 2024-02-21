"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let max = this.collection.length;
        while (max > 0) {
            for (let i = 1; i < max; i++) {
                if (this.collection[i - 1] > this.collection[i]) {
                    let temp = this.collection[i - 1];
                    this.collection[i - 1] = this.collection[i];
                    this.collection[i] = temp;
                }
            }
            max--;
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
