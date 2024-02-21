"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let max = this.collection.length;
        if (typeof this.collection === 'string') {
            this.collection = this.collection.toLowerCase().split('');
        }
        while (max > 0) {
            for (let i = 1; i < max; i++) {
                if (this.collection[i - 1].toString() > this.collection[i].toString()) {
                    let temp = this.collection[i - 1];
                    this.collection[i - 1] = this.collection[i];
                    this.collection[i] = temp;
                }
            }
            max--;
        }
    }
}
const sorter = new Sorter('ahmed');
sorter.sort();
console.log(sorter.collection);
