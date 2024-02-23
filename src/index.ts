import { CharacterCollection } from './CharacterCollection';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([9, -1, 5, 4, 3]);
const characterCollection = new CharacterCollection('Ahmed')
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data); // Adehm
