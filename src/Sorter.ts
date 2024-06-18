export abstract class Sorter {
	abstract length: number;

	abstract compare ( leftIndex: number, rightIndex: number ): boolean;

	abstract swap ( leftIndex: number, rightIndex: number ): void;

	sort (): void {
		const { length } = this;

		for ( let i = 0 ; i < length ; i++ ) {
			for ( let j = i + 1 ; j < length ; j++ ) {
				if ( this.compare(i, j) ) {
					this.swap(i, j);
				}
			}
		}
	}
}