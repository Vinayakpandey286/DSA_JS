const arr =[5,9,1,8,2,3]

let i =0
let j= arr.length-1

while(i<=j){
  temp=arr[i]
  arr[i]=arr[j]
  arr[j]=temp
  
  i++
  j--
}

console.log(arr)