const str = "Hello123@#World!";
let vowels = 0, digits = 0, special = 0; consonants=0

for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    // Vowels
    if (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    ) {
        vowels++;
    }
     // Consonants (alphabet but not vowel)
    else if (
        (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')
    ) {
        consonants++;
    }
    // Digits
    else if (ch >= '0' && ch <= '9') {
        digits++;
    }
    // Special Characters
    else if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))) {
        special++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

console.log("Digits:", digits);
console.log("Special Characters:", special);
