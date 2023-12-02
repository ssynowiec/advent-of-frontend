export class ChristmasQueue<type> {
	queue: { item: type; priority: number }[] = [];

	enqueue(item: type, priority: number) {
		this.queue.push({ item, priority });
		this.queue.sort((a, b) => b.priority - a.priority);
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error('There are no letters in the queue!');
		} else {
			return this.queue.shift()?.item;
		}
	}

	isEmpty() {
		if (this.queue.length === 0) {
			return true;
		} else {
			return false;
		}
	}
}
