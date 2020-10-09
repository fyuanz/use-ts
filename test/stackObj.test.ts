import stackObj from "../src/stackObj";

describe("测试基于数组的栈结构", () => {
    test("stack测试", () => {
        const stack = new stackObj<number>();

        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.pop()).toBe(undefined);
        expect(stack.toString()).toBe("");
        expect(stack.peek()).toBe(undefined);

        stack.push(5);
        stack.push(8);

        expect(stack.size()).toBe(2);
        expect(stack.isEmpty()).toBe(false);

        stack.push(11);

        expect(stack.peek()).toBe(11);

        expect(stack.pop()).toBe(11);

        expect(stack.toString()).toBe("5,8");

        expect(stack.toString(".")).toBe("5.8");

        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });
});
