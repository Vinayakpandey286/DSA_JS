function BubbleSort(arr) {
    let i = arr.length - 1
    while (i > 0) {
      let swapped = false
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
        if (!swapped) return arr
        i--
    }

    return arr

}

// in bubble sort we store the n-1 index 
// and iterate through to 0 to n-1 and swap the value if j > j+1
// store swapped var for best case scenario if arr is already sorted
// 4. do i--

console.log(BubbleSort([2, 5, 6, 1]))
