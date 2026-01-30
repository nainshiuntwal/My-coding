// let s1 = "hello world";

// // Array of size 256 (for ASCII characters)
// let freq = new Array(256).fill(0);

// // Count frequency
// for (let i = 0; i < s1.length; i++) {
//   let c = s1.charCodeAt(i); // get ASCII value
//   if (s1[i] !== ' ') {
//     freq[c]++;
//   }
// }

// // Print frequency of characters
// for (let i = 0; i < freq.length; i++) {
//   if (freq[i] !== 0) {
//     console.log(String.fromCharCode(i) + " " + freq[i]);
//   }
// }

let str = "Hello world";
let freq = {};

 for(let ch of str.toLowerCase()){
        if(ch >='a' && ch<='z')
            freq[ch] = (freq[ch] || 0)+1;
    }


for (let ch in freq) {
  console.log(ch + " " + freq[ch]);
}
