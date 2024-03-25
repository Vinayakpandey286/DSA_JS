const arr = [1,0,0,1,1,1,0,1,0,0,1]

// seprate 0 and 1

// 1st method but it iterates 2 times
// let zero = 0
// let one =0

// for(let i in arr){
//   // console.log(arr[i])
//   if(arr[i]%2!==0){
//     one+=1
//   }else{
//     zero+=1
//   }
// }

// for(let i in arr){
//   if(i<zero){
//     arr[i]=0
//   }else{
//     arr[i]=1
//   }
// }

// best method DNF (Dutch national flag) algorithm

let i =0
let j=arr.length-1

while(i<=j){
if(arr[i]%2===1){ // check for 1 at first index
  temp = arr[i]
  arr[i]=arr[j]
  arr[j]=temp
  j--  // threw new 1 at right window
  
}else{
  i++ // expand left window directly
}
  
}

console.log(arr)