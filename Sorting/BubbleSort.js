function BubbleSort(arr) {
    let swapped = false
    let i = arr.length - 1
    while (i > 0) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            } else {
                swapped = true
            }
        }
        if (swapped) return arr
        i--
    }

    return arr

}

// in bubble sort we store the n-1 index 
// and iterate through to 0 to n-1 and swap the value if j > j+1
// 4. do i--

console.log(BubbleSort([2, 5, 6, 1]))