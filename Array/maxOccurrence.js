const arr = [1, 2, 1, 2, 2, 2, 1, 2, 3];

// Step 1: frequency object
const freq = {};

for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
}

// Step 2: find max occurrence
let maxCount = 0;
let maxElement = null;

for (let key in freq) {
    if (freq[key] > maxCount) {
        maxCount = freq[key];
        maxElement = Number(key);
    }
}

console.log("Most occurring element:", maxElement, "Frequency:", maxCount);
// console.log();
