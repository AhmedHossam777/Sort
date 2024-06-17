export class Sorter {
	constructor ( public collection: number[] | string ) {}

	sort (): void {
		const { length } = this.collection;

		for ( let i = 0 ; i < length ; i++ ) {
			for ( let j = i + 1 ; j < length ; j++ ) {
				if ( this.collection instanceof Array ) {
					if ( this.collection[i] > this.collection[j] ) {
						const temp = this.collection[i];
						this.collection[i] = this.collection[j];
						this.collection[j] = temp;

					}
				}
				if ( typeof ( this.collection ) === 'string' ) {
					this.collection = this.collection.toLowerCase().split('').sort().join('');
				}
			}
		}
	}
}

const sorted = new Sorter('Ahmed Hossam');
sorted.sort();
console.log(sorted.collection);