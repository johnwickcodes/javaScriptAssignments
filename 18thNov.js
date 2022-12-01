/*


1. Given a positive integer A, find a pair of integers a, b such that
a and b are positive
A <= B
a^2 + b^2 = A
0<=A<=100000

*/

/*


LOGIC I USED:-
if a**2 +b**2=A 
then
b**2=A-a**2

b=Math.sqrt(A-a**2)



*/




function pair(A){
    
        for(let a=1; a<A; a++){
            let b=Math.sqrt(A-a**2);
    
            if(Math.floor(b)==Math.ceil(b)){
                console.log(a,b);
                return;
            } 
        }
        console.log("No such pair exists");
    }
    
    
    pair(25);
    pair(29)
    pair(10)
    pair(500)


console.log("_______________________________________________")
    
/*

Question 2:-2. Create a program to print all the palindromes under 50.


*/


function palindrome(num){
    str=""+num;

let i=0
let j= str.length-1

while(i<j){
    if(str[i]==str[j])
    {
        i++
        j--
    }else return num + " is not a palindrome"
} return num+ " is a palindrome"


}


function palinRange(range){
    for (x=1;x<=range;x++){
        console.log(palindrome(x))
    }
}

palinRange(50)