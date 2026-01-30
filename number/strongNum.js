//? sum  of factorial of each digit = original

let num =145;
let temp = num;
let sum =0;

while(num>0){
    let lastDigit = num % 10;
     let fact =1;

     for(let i = lastDigit; i>=1;i--){
        fact = fact * i;
     }

     sum = sum + fact;
     num=Math.floor(num/10)
}

if(sum == temp){
    console.log("strong")
}
else{
    console.log("not strong")
}