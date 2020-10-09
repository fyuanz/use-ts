import insertSort from "../src/insertSort";

describe("测试插入排序", () => {
    test("排序测试", () => {
        const arr = [6, 0, 3, 1, 2, 4, 5, 7, 9, 8];
        expect(insertSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
