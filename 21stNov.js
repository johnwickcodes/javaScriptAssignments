/*

Problem 1 :
Create a program wherein you will be given a list of name of the people along with their designation, based on the name you type, the relevant designation of the person will be displayed.
Following are the Designation of the people
-Alex is a Developer
-John is an Artist
-Strek is a Singer
-Smith is an Actor


*/

/*

Q2. Create a program to print all prime palindromes under 50.

*/

// Check if the given number is a palindrome 


function isPrime(num){
    for (let i=2; i<= num-1 ; i++){
        if(num%i==0)
        return false
    }
    return  true
}


function palindrome(num){
    str=""+num;

let i=0
let j= str.length-1

while(i<j){
    if(str[i]==str[j])
    {
        i++
        j--
    }else return false
} return true


}

function primePalin(range){
    for(let r=1; r<=range;r++){
        if(isPrime(r)==true&&palindrome(r)==true)(
            console.log(r+" is a prime Palindrome")
        )
        
    }
}

primePalin(500)