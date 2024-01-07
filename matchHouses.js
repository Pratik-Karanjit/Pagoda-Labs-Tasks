let matchSticks = (...inputs) => {
    let output = inputs.reduce((pre,cur) => {
        return 6 + pre + (cur - 1) * 5
    },0)
    return output
}

console.log(matchSticks(1))
console.log(matchSticks(4))
console.log(matchSticks(87))






