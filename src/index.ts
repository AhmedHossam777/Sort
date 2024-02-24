import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([9, -1, 5, 4, 3]);
const characterCollection = new CharacterCollection('Ahmed');

const linkedlist = new LinkedList();

linkedlist.add(10);
linkedlist.add(-1);
linkedlist.add(50);
linkedlist.add(-6);
linkedlist.add(7);

const sorter = new Sorter(linkedlist);
sorter.sort();
linkedlist.print();
