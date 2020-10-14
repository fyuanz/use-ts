export default function fn(...params: Array<number>): number {
    return [...params].reduce((a, b) => {
        return a + b;
    }, 0);
}
console.log(fn(1, 1, '1'));
