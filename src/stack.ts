export default class Stack<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    push(element: T) {
        return this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString(separator = ",") {
        return this.items.join(separator).toString();
    }
}
