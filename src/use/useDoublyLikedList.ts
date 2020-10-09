import DoublyLikedList from "../doublyLikedList";

let doublyLikedList = new DoublyLikedList<number>();
for (let i = 0; i < 10000000; i++) {
    doublyLikedList.push(i);
}
console.time();

doublyLikedList.insert(100000000000996, 9);
let idex = doublyLikedList.removeAt(9);
console.timeEnd();
console.log(idex);
doublyLikedList = null;

let arr = [];
for (let i = 0; i < 10000000; i++) {
    arr.push(i);
}
console.time("arr");
arr.splice(9, 0, 100000000000996);
let index = arr.splice(9, 1);
console.timeEnd("arr");
console.log(index);
