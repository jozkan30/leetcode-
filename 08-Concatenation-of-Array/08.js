var getConcatenation = function(nums) {
    let arr = nums
    let con = arr.concat(...nums)
    return con
};

console.log(getConcatenation([1,2,1]))
console.log(getConcatenation([1,3,2,1]))