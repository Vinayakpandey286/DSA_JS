function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = [...result,...flattenArray(arr[i])];
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

const arr = [1, 2, [2, 2, 4, 5, 6], 4, 6, 1];
const flattenedArr = flattenArray(arr);

console.log(flattenedArr);
