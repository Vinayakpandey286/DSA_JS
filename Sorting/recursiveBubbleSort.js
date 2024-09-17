function recursiveBubbleSort(arr, k, i) {
    if(k===0) return
    if(i===k) {
      recursiveBubbleSort(arr, k-1,0)
      return
    }
    
      if(arr[i]>arr[i+1]){
        [arr[i], arr[i+1]]  = [arr[i+1], arr[i]]
      }
    
    recursiveBubbleSort(arr, k, i+1)
    
    
    
    return arr
      
    
  
}



const arr = [-1,4 ,-2, 5, 65, 1, -5]

console.log(recursiveBubbleSort(arr, arr.length-1, 0))
