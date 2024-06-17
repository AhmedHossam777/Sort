interface Sortable {
	length: number;

	compare ( leftIndex: number, rightIndex: number ): boolean;

	swap ( leftIndex: number, rightIndex: number ): void;
}

export class Sorter {
	constructor ( public collection: Sortable ) {}

	sort (): void {
		for ( let i = 0 ; i < this.collection.length ; i++ ) {
			for ( let j = i + 1 ; j < this.collection.length ; j++ ) {
				if ( this.collection.compare(i, j) ) {
					this.collection.swap(i, j);
				}
			}
		}
	}
}