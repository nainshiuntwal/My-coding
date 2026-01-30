function mostFreqChar (str){
    let str ='Sally swiftly sailed across the shimmering sea';
    const freq ={};
    for(let ch of str.toLowerCase()){
        if(ch >='a' && ch<='z')
            freq[ch] = (freq[ch] || 0)+1;
    }

    let maxCount=0;
    let maxChar=''

    for(let ch in freq){
        if(freq[ch]>maxCount){
            maxCount=freq[ch]
            maxChar=ch
        }
    }
    return maxChar

}

console.log(mostFreqChar("Sally swiftly sailed across the shimmering sea"))