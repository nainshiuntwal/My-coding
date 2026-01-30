const isPlindrom=(str)=>{
    // str=str.toLowerCase()
    let reverse="";
     for(let i =str.length-1; i>=0; i--){
        reverse += str[i]
    }
    return str=== reverse ? true : false;
}
console.log(isPlindrom("naman"))

// let str = "naman";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }

// console.log(reverse === str ? "Palindrome" : "Not Palindrome");
