let isPalindrome = (x) => {
  let index = x.split("");
  let rev = index.reverse();
  let word = rev.join("");

  if (x === word) {
    return `Match! x value: ${x}  reverse value: ${word}`;
  } else {
    return `Nope! x value: ${x}  reverse value: ${word}`;
  }
};
console.log(isPalindrome("hello"));

// // If target value is a integer. Must first convert to string.

// // let isPalindrome = function (x) {
// //   let num =  x.toString()
// //   let index = num.split('')
// //   let rev = index.reverse()
// //   let word = rev.join('')

// //   if(num === word){
// //         return `Match! x value: ${x}  reverse value: ${word}`
// //     }else{
// //         return `Nope! x value: ${x}  reverse value: ${word}`
// //     }
// //     }

// console.log(isPalindrome(000))
