let n = 11;
let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log("is prime");
} else {
  console.log("not prime");
}
