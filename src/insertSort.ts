export default function insertSort(arr: Array<number>) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            let j = i - 1;
            let x = arr[i];
            while (j > -1 && x < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = x;
        }
    }
    return arr;
}

const arr = [6, 0, 3, 1, 2, 4, 5, 7, 9, 8];
console.log(insertSort(arr));
