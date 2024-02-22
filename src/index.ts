import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([9, -1, 5, 4, 3]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
