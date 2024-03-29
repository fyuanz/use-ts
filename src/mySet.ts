export default class mySet<T> {
    protected items: { [key: string]: T };
    constructor() {
        this.items = {};
    }
    add(element: T) {
        //向集合添加一个新元素
        if (this.has(element)) return false;
        this.items[element + ""] = element;
        return true;
    }
    delete(element: T) {
        // 从集合移除一个元素
        if (!this.has(element)) return false;
        delete this.items[element + ""];
        return true;
    }
    has(element: T) {
        //如果元素在集合中，返回 true，否则返回 false。
        return Object.prototype.hasOwnProperty.call(this.items, element + "");
    }
    clear() {
        //移除集合中的所有元素。
        this.items = {};
    }
    size() {
        //返回集合所包含元素的数量。它与数组的 length 属性类似。
        return Object.keys(this.items).length;
    }
    values() {
        //返回一个包含集合中所有值（元素）的数组。
        return Object.values(this.items);
    }
    getUnion(otherSet: mySet<T>) {
        //求并集
        const union = new mySet<T>();
        this.values().forEach((el) => union.add(el));
        otherSet.values().forEach((el) => union.add(el));
        return union;
    }
    getIntersection(otherSet: mySet<T>) {
        //求交集
        const intersection = new mySet<T>();
        let smallerSet = this.values();
        let biggerSet = otherSet.values();
        //做优化处理 每次只迭代长度最少的集合
        if (smallerSet.length > biggerSet.length) {
            [smallerSet, biggerSet] = [biggerSet, smallerSet];
        }
        smallerSet.forEach((el) => {
            if (biggerSet.includes(el)) {
                intersection.add(el);
            }
        });
        return intersection;
    }
    getDifference(otherSet: mySet<T>) {
        //求差集
        const difference = new mySet<T>();
        this.values().forEach((el) => {
            if (!otherSet.has(el)) {
                difference.add(el);
            }
        });
        return difference;
    }
    isSubsetOf(otherSet: mySet<T>) {
        //判断子集
        if (this.size() > otherSet.size()) return false;
        return this.values().every((el) => otherSet.has(el));
    }
}

export function getUnion<T>(setA: Set<T>, setB: Set<T>) {
    return new Set([...setA, ...setB]);
}

export function getIntersection<T>(setA: Set<T>, setB: Set<T>) {
    let smallerSet = setA;
    let biggerSet = setB;
    if (smallerSet.size > biggerSet.size) {
        [smallerSet, biggerSet] = [biggerSet, smallerSet];
    }
    return new Set([...smallerSet].filter((el) => biggerSet.has(el)));
}

export function getDifference<T>(setA: Set<T>, setB: Set<T>) {
    return new Set([...setA].filter((el) => !setB.has(el)));
}

export function isSubsetOf<T>(setA: Set<T>, setB: Set<T>) {
    if (setA.size > setB.size) return false;
    //注意 set提供的foreach 是无法 break的 为了优化采用迭代器迭代
    let iteratorResult: IteratorResult<T, any> = { value: null, done: false };
    let values = setA.values();
    let res = true;
    while (!iteratorResult.done) {
        iteratorResult = values.next();
        if (iteratorResult.value && !setB.has(iteratorResult.value)) {
            res = false;
            break;
        }
    }
    return res;
}
