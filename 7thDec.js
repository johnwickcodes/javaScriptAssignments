//Q2. Write code for finding the smallest element in an array.


let arr=[2,3,4,5,-16,18]

curMin=arr[0];

for(i=0;i<arr.length;i++){

    if (arr[i]<curMin){
        curMin=arr[i];
    }
}
console.log(curMin)


