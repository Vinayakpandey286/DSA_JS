function Selectionsort(arr) {
    let i = 0
    while (i < arr.length) {
        let min = i + 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (arr[i] > arr[min]) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
        i++

    }

    return arr

}

// in selection sort we store the 0 index 
// and iterate through to i+1 to n-1 and storing the i+1 as mini to check the minimum value throughout the array
// after getting the mini value if 0 index value is greater than mini value then we swap
// 4. do i++ 

console.log(Selectionsort([15, 2, 5, 6, 3, 1, -1]))