// count vowels 

function countVowels(str){
    let count = 0;
    for (let char of str){
        if (char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.toLowerCase() === "o" || char.toLowerCase() === "u"){
            count++;
        }
    }
    return count;
}