let arr = [10,30, 40,50,60,20];
let max = -Infinity;
let secondMax=-Infinity;

for(let i=0; i<arr.length;i++){
    let num = arr[i];
    if(num > max){
        secondMax=max;
        max=num;
    }else if(num > secondMax && max!=num){
        secondMax=max;
    }
}

console.log("secondMax:" , secondMax)