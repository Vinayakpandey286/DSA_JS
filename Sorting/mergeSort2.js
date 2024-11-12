function mergeArray(left , right){
  
  
  let result=[]
  let i =0, j=0
  while(i< left.length && j < right.length){
    if(left[i]< right[j]){
      result.push(left[i])
      i++
    }else{
      result.push(right[j])
      j++
    }
  }
  
  while(i< left.length){
    result.push(left[i])
    i++
  }
  while(j< right.length){
    result.push(right[j])
    j++
  }
  return result
}


function mergeSort(arr, i, j) {
  if(i===j){
    temp= [arr[i]]
    return temp
  }
  
    let mid = Math.floor((i+j)/2)
    let left  = mergeSort(arr, i,mid)
    let right = mergeSort(arr, mid+1,j)
    let result  = mergeArray(left , right)
  
    return result
  
}

function merge(arr){
  return mergeSort(arr, 0, arr.length-1)
}



let arr = [-6,5,33,0,2,-1]
arr = merge(arr, 0, arr.length-1)
console.log(arr)
