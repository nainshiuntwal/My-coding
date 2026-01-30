const input = "programming";
let result = "";

for (let i = 0; i < input.length; i++) {
    const current = input[i];
    let found = false;

    for (let j = 0; j < result.length; j++) {
        if (result[j] === current) {
            found = true;
            break;
        }
    }

    if (!found) {
        result += current;
    }
}

console.log("Original String:", input);
console.log("After Removing Duplicates:", result);
