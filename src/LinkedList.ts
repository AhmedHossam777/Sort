class Node {
	next: Node | null = null;

	constructor ( public data: number ) {}
}

export class LinkedList {
	head: Node | null = null;

	get length (): number {
		if ( !this.head ) {
			return 0;
		}

		let length = 1;
		let node = this.head;

		while ( node.next !== null ) {
			length++;
			node = node.next;
		}
		return length;
	}

	add ( data: number ): void {
		const node = new Node(data);

		if ( !this.head ) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while ( tail.next !== null ) {
			tail = tail.next;
		}

		tail.next = node;
		node.next = null;

	}

	at ( index: number ): Node {
		if ( !this.head ) {
			throw new Error('index out of bound');
		}

		let counter = 0;
		let node: Node | null = this.head;
		while ( node ) {
			if ( counter === index ) {
				return node;
			}
			counter++;
			node = node.next;
		}

		throw new Error('index out of bound');
	}

	compare ( leftIndex: number, rightIndex: number ): boolean {
		if ( !this.head ) {
			throw new Error('index out of bound');
		}

		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap ( leftIndex: number, rightIndex: number ): void {
		let leftNode = this.at(leftIndex);
		let rightNode = this.at(rightIndex);

		let temp = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = temp;
	}

	print (): void {
		if ( !this.head ) {
			throw new Error('index out of bound');
		}

		let node: Node | null = this.head;
		while ( node ) {
			console.log(node.data);
			node = node.next;
		}
	}

}