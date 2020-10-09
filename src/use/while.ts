let i = 0;
function fn(count: number) {
    while (count > 0) {
        i++
        count--;
        fn(count);
    }
}
fn(30);
console.log(i);
