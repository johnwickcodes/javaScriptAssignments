/*
Requirements: "1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
Input Array -> [0,1,1,0,1,0,0,1]
Output -> [0,0,0,0,1,1,1,1]

Logic:-

[0,1,1,0,1,0,0,1]
 i             j


*/



function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

}


function separate(arr){
    let i=0;
let j=arr.length-1;


while(i<j){
    if(arr[i]==1){
        
        swap(arr,i,j)
        j--
    }
    else i++

    }
    return arr
}



console.log(separate([1,0,1,1,1,0,0,0,1,0]))

