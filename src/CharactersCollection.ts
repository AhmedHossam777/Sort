export class CharactersCollection {
	constructor ( public data: string ) {}

	get length (): number {
		return this.data.length;
	}

	compare ( leftIndex: number, rightIndex: number ): boolean {
		let characters = this.data.toLowerCase().split('');
		return characters[leftIndex] > characters[rightIndex];
	}

	swap ( leftIndex: number, rightIndex: number ): void {
		let characters = this.data.toLowerCase().split('');
		const temp = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = temp;

		this.data = characters.join('');
	}
}