export default class DeQue<T> {
    private count: number;
    private lowestCount: number;
    private items: { [key: string]: T };

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(...element: Array<T>): void {
        if ((element.length = 0)) return;
        if (element.length > 1) {
            return element.forEach((el) => this.addFront(el));
        }

        let value = element[0];
        if (this.isEmpty()) {
            return this.addBack(value);
        }

        if (this.lowestCount > 0) {
            this.items[--this.lowestCount] = value;
        } else if (this.lowestCount === 0) {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.items[0] = value;
        }
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) return undefined;
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        this.count--;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) return undefined;
        let result = this.items[--this.count + this.lowestCount];
        delete this.items[this.count + this.lowestCount];
        return result;
    }

    peekFront() {
        return this.items[this.lowestCount];
    }

    peekBack() {
        return this.items[this.lowestCount + this.count - 1];
    }

    addBack(...element: Array<T>): void {
        if (element.length === 1) {
            this.items[this.lowestCount + this.count++] = element[0];
        } else {
            element.forEach((el) => {
                this.items[this.lowestCount + this.count++] = el;
            });
        }
    }

    isEmpty() {
        //判断队列是否为空
        return this.count === 0;
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
