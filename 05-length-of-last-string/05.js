// 58. Length of Last Word

let findLast = (word) =>{
    let last = ''
    let arr = word.split(' ')
    let newArr  =  arr.filter((x)=> x !== '')  
    let end = newArr.length - 1
    last = newArr[end]
    let x =  last.split('')
    return x.length
}
    

console.log(findLast("hello world"))
console.log(findLast("   fly me   to   the moon  "))
console.log(findLast("luffy is still joyboy"))