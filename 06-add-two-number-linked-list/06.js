// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let num1 = l1.reduce((x,y)=> (x * 10) + y)
    let num2 = l2.reduce((a,b)=>(a * 10) + b)
    let ex =  num1 + num2
    let digits = Array.from(String(ex), Number)
    digits.reverse()
    return digits
  };
  console.log(addTwoNumbers([2,4,3], [5,6,4]))
  console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
