"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        let characters = this.data.toLowerCase().split('');
        return characters[leftIndex] > characters[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        let characters = this.data.toLowerCase().split('');
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
