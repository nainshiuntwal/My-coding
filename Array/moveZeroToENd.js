const arr = [1, 0, 3, 0, 5];

const arr1 = new Array(arr.length).fill(0);
let k = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr1[k++] = arr[i];
    }
}

console.log(arr1);
