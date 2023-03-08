// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


var defangIPaddr = function(address) {
let ip= ""
let arr = address.split('')
for(let i = 0; i < arr.length; i++){
    if(arr[i]=== "."){
        ip += "[.]"
    } else{
        ip += arr[i]
    }
}
return ip
};



console.log(defangIPaddr("1.1.1.1"))
console.log(defangIPaddr("255.100.50.0"))