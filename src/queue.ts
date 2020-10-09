export default class Queue<T> {
    private count: number;
    private lowestCount: number;
    private items: { [key: string]: T };

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(...element: Array<T>) {
        if (element.length === 1) {
            this.items[this.lowestCount + this.count++] = element[0];
        } else {
            element.forEach((el) => {
                return (this.items[this.lowestCount + this.count++] = el);
            });
        }
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        this.count--;
        return result;
    }

    isEmpty() {
        return this.count === 0;
    }

    peek() {
        return this.isEmpty() ? undefined : this.items[this.lowestCount];
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = {};
        this.count = this.lowestCount = 0;
    }

    toString(separator = ",") {
        return this.isEmpty()
            ? ""
            : Object.keys(this.items)
                  .reduce((sum, el) => (sum = sum + separator + this.items[el]), "")
                  .slice(1);
    }
}
