
function insertionSort(arr) {
    
      for(let i =1; i< arr.length; i++){
         let current_element = arr[i]
         let j = i-1
         while(j>=0 && arr[j]> current_element){
           arr[j+1] = arr[j]
           j--
         }
         arr[j+1]= current_element
      }
      
      return arr
    
  
}



const arr = [5,4,3,2,1]

console.log(insertionSort(arr))
