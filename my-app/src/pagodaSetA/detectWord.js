let  detectWord = (crowdOfLetters) => {
    let detectedWord = "";

    for (let char of crowdOfLetters) {
        if (char.toLowerCase() === char) {
            detectedWord += char;
        }
    }
    return detectedWord;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH")); 

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
 
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
