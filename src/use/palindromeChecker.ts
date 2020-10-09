import DeQue from "../deque";

export default function palindromeChecker(aString: string) {
    if (aString.length < 1) return false;
    const deque = new DeQue<string>();
    //将字符串去除空格,转成数组格式入栈
    deque.addBack(...aString.toLocaleLowerCase().split(" ").join("").split(""));
    let result = true;
    while (deque.size() > 1 && result) {
        //然后将队列 前端 和 后端 remove 并比较 赋值给result
        //循环的出口是 result 为 false 或 队列size <= 1
        result = deque.removeFront() === deque.removeBack();
    }
    return result;
}
