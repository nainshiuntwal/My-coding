const str = "swiss ";
const freq = {};

// Step 1: Count frequency of each character
for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
}

// Step 2: Find first character with frequency 1
let result = null;
for (let ch of str) {
    if (freq[ch] === 1) {
        result = ch;
        break;
    }
}

console.log(result); // w
