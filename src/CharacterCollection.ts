import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const character = this.data.split('');
    let temp = character[rightIndex];
    character[rightIndex] = character[leftIndex];
    character[leftIndex] = temp;

    this.data = character.join('')
  }
}
