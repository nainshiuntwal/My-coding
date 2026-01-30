const str = "Java is fun";
let result = "";

for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch !== ' ') {
        result += ch;
    }
}

console.log("String without spaces:", result);
