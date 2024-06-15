let arr = [10, 30, 40, 20, 50, 20];
debugger

function frogJump2(i, n, k) {
  if (i === n) return 0;
  if (i === n - 1) {
    return Math.abs(arr[i] - arr[i + 1]);
  }
  if (i > n) return Infinity;

  let result = Infinity;

  for (let j = 1; j <= k; j++) {
    result = Math.min(
      Math.abs(arr[i] - arr[j]) + frogJump2(i + j, n, k),
      result
    );
  }
  return result;
}

console.log(frogJump2(0, arr.length - 1, 3));
