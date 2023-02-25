let isPalindrome = (x) =>{
let index = x.split('')
let rev = index.reverse()
let word = rev.join('')

if(x === word){
    return `Match! x value: ${x}  reverse value: ${word}`
}else{
    return `Nope! x value: ${x}  reverse value: ${word}`
}
}

console.log(isPalindrome("hello"))