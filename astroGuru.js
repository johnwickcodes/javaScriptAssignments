/* Problem Statement - 1
Write a function astroguru that:
Takes four arguments: number of children, spouses name, location and job
Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”

*/
console.log("Welcome to AstroGuru");
function astroguru(job, numkid, partner, location){
    console.log("You will be a "+job+" living in "+location+" married to "+partner+", with "+numkid+" little children")
}
astroguru("Software Entreprenure",369 ,"Sudha","London");

/*

Problem Statement - 2
Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal

*/

function compare(num1,num2){
    if(num1===num2){
        console.log(num1," and ",num2, " are equal")
    }
    else if(num1>num2){
       
        console.log(num1, " is greater than ", num2)
    }
    else if(num2>num1){
        console.log(num2, " is greater than ", num1)
    }
    else {console.log("The given input is incompareable")}
}


compare(50,78);
compare(79,677);
compare(78,78);
compare("Rishabh", 67);
