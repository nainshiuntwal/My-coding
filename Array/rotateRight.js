// let arr = [1, 2, 3, 4, 5];

// // store last element
// let last = arr[arr.length - 1];

// // shift elements to the right
// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// // put last element at first position
// arr[0] = last;

// console.log("Rotated Array:", arr);

//? left rotatae
let arr = [1, 2, 3, 4, 5];

// store first element
let first = arr[0];

// shift elements to the left
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

// put first element at last position
arr[arr.length - 1] = first;

console.log("Rotated Array:", arr);
