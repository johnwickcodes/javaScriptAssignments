/*

    1   
   121
  12321
 1234321
123454321

n       =5
i       =1,2,3,4,5      
   
space   =4,3,2,1,0    spaces= n-i
j(left) =1,2,3,4,5
k(right)=0,1,2,3,4   

*/

function pattern(n){

    for(let i=1;i<=n;i++){
        let str="";
        spaces=n-i;
        for(let s=1; s<=spaces;s++){
            str+=" "
        }


        let curNum=1
        for(let j=1;j<=i;j++){

            str+=curNum

            curNum++
                              
            
        }

        let curNum2=i-1
        for(let k=1;k<=i-1;k++){
            str+=curNum2
            curNum2--
        }
        

        console.log(str)

    }
}

pattern(5)