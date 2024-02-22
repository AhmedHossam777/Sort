export class NumberCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex];
    this.data[leftIndex] = temp;
  }
}

// const collection = new NumberCollection([9, 5, 73, -8]);
// collection.length

//? get : this makes a getter that make the function we defined accessed by the object of the class as we access a property not a method