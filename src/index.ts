import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';

const numberCollection = new NumberCollection([9, -1, 5, 4, 3]);
numberCollection.sort()
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('Ahmed');
characterCollection.sort()
console.log(characterCollection.data);


const linkedlist = new LinkedList();

linkedlist.add(10);
linkedlist.add(-1);
linkedlist.add(50);
linkedlist.add(-6);
linkedlist.add(7);

linkedlist.sort();
linkedlist.print()