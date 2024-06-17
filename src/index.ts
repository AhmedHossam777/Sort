import { Sorter }            from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([ 1, 6, 9, 8, 7, 1, -20, -3 ]);

const sorted = new Sorter(numbers);
sorted.sort();
console.log(numbers.data);