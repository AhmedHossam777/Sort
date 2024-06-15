export class Sorter {
	constructor ( public collection: number[] ) {}

	sort (): void {
		for ( let i = 0 ; i < this.collection.length ; i++ ) {
			for ( let j = i + 1 ; j < this.collection.length ; j++ ) {
				let temp = 0;
				if ( this.collection[i] > this.collection[j] ) {
					temp = this.collection[i];
					this.collection[i] = this.collection[j];
					this.collection[j] = temp;
				}
			}
		}
	}
}

const sorted = new Sorter([ 5, 2, 9, 7, -1 ]);
sorted.sort();
console.log(sorted.collection);