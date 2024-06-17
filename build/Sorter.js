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
                if (this.collection.compare(i, j)) {
                    this.collection.swap(i, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
