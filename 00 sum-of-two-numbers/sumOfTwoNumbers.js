// Sum of two numbers

let myAr =  [4,5,6,7]
let target = 13

for(let i = 0; i < myAr.length; i++){
    for(let j = i + 1; j < myAr.length; j++){
        if(myAr[i] + myAr[j] == target){
            console.log( [myAr[i] , myAr[j]])
        }
    }
}