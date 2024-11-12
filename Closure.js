function sum(a, b) {
    console.log('calculating sum');
    return a + b;
}

function memoizeSum(fn) {
    const value = {};
    console.log('hi',value)

    return function (a, b) {
        const key = `${a},${b}`;  // Unique key for each argument pair
        if (value.hasOwnProperty(key)) {
            return value[key];
        } else {
            value[key] = fn(a, b);  // Call the original function and cache the result
            return value[key];
        }
    };
}

const memoizedSum = memoizeSum(sum);

console.log(memoizedSum(3, 4));  // Output: calculating sum 7
console.log(memoizedSum(3, 4));  // Output: 7 (no "calculating sum" because it's cached)
console.log(memoizedSum(5, 6));  // Output: calculating sum 11
