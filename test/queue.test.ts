import Queue from "../src/queue";

describe("基本队列的测试", () => {
    test("结构体测试", () => {
        const que = new Queue<string>();
        //测试peek size isEmpty
        expect(que.peek()).toBe(undefined);
        expect(que.size()).toBe(0);
        expect(que.isEmpty()).toBe(true);

        que.enqueue("Tom");
        expect(que.dequeue()).toBe("Tom");

        //添加队列元素
        que.enqueue("John", "Jack", "Camila");

        //测试peek size isEmpty
        expect(que.size()).toBe(3);
        expect(que.isEmpty()).toBe(false);
        expect(que.peek()).toBe("John");

        expect(que.toString(".")).toBe("John.Jack.Camila");

        //出列两个元素
        expect(que.dequeue()).toBe("John");
        expect(que.dequeue()).toBe("Jack");

        //测试peek size  toString
        expect(que.peek()).toBe("Camila");
        expect(que.size()).toBe(1);
        expect(que.toString()).toBe("Camila");

        que.clear();

        expect(que.dequeue()).toBe(undefined);
        expect(que.size()).toBe(0);
        expect(que.toString()).toBe("");
    });
});
