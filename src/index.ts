import { Sorter }               from './Sorter';
import { NumbersCollection }    from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([ 1, 6, 9, 8, 7, 1, -20, -3 ]);
const charactersCollection = new CharactersCollection('Ahmed Hossam');

const sortedNumbers = new Sorter(numbersCollection);
const sortedCharacters = new Sorter(charactersCollection);

sortedCharacters.sort();
sortedNumbers.sort();
console.log(charactersCollection.data);
console.log(numbersCollection.data);