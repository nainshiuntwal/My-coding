let n = 121;
let temp = n;
let rev =0;

while(n>0){
    let digit = n%10
    rev = rev*10 + digit
    n=Math.floor(n/10)
}

if(rev == temp){
    console.log("palindrom")
}else{
    console.log("not palindrom")
}