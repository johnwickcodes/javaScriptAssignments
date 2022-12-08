/**
 * Requirements: "1. Given 2 numbers as input. You need to find if they have opposite signs or not.
Input -> +123, -12
Output -> true

2. Given 3 numbers. You need to find the smallest of three numbers without using comparison operators
Input -> 12,44,2
Output -> 2
 */

//Problem 1


function oppOrNot(a,b){
    if((a<0&&b>0)||(b<0&&a>0)){
        return true
    }
    else if((b>0&&a>0)||(a<0&&b<0)){
        return false
    }
}

console.log(oppOrNot(9,8));
console.log(oppOrNot(-9,-8));
console.log(oppOrNot(9,-8));
console.log(oppOrNot(-9,8));


// Problem 2 


function smallestOfThree(x,y,z){
    let c=0;
    while(x&&y&&z){
        x--;
        y--;
        z--;
        c++;
    }
    return c
}

console.log(smallestOfThree(34,6,8));
console.log(smallestOfThree(12,2,44));
console.log(smallestOfThree(34,6,0));