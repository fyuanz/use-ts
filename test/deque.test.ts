import palindromeChecker from "../src/use/palindromeChecker";

describe("双端队列的测试", () => {
    test("回文检查器", () => {
        expect(palindromeChecker("level")).toBe(true);
        expect(palindromeChecker("kayak")).toBe(true);
        expect(palindromeChecker("Was it a car or a cat I  saw")).toBe(true);
        expect(palindromeChecker("Step on no pets")).toBe(true);
        expect(palindromeChecker("a")).toBe(true);
        expect(palindromeChecker("")).toBe(false);
        expect(palindromeChecker("queue")).toBe(false);
    });
});
