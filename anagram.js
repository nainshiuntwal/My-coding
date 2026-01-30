function isAnagram(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length) return false
    let count1={};
    let count2 ={};

    for(let i=0; i<str1.length; i++){
        let ch =str1[i];
        count1[ch] =(count1[ch]||0)+1;
    }
    for(let i=0; i<str2.length; i++){
        let ch =str2[i];
        count2[ch] =(count2[ch]||0)+1;
    }

    for(let ch in count1){
        if(count1[ch] !==count2[ch]){
            return false
        }
    }
    return true
}
console.log(isAnagram("Silent", "listen"))