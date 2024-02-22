"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[rightIndex];
        this.data[rightIndex] = this.data[leftIndex];
        this.data[leftIndex] = temp;
    }
}
exports.NumberCollection = NumberCollection;
const collection = new NumberCollection([9, 5, 73, -8]);
collection.length;
//? get : this makes a getter that make the function we defined accessed by the object of the class as we access a property not a method
