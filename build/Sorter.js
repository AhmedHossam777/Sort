"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
