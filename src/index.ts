import { Sorter }               from './Sorter';
import { NumbersCollection }    from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList }           from './LinkedList';

const numbersCollection = new NumbersCollection([ 1, 6, 9, 8, 7, 1, -20, -3 ]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Ahmed Hossam');
charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();