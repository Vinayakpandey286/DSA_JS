/**
 Optimize answer less iteration
 */
 function setZeroes(matrix: number[][]): void {
    const row = Array(matrix.length).fill(0)
    const col = Array(matrix[0].length).fill(0)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1
                col[j] = 1
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }

};



/**
 Brute force solution but if the matrix contains any neagtive no. then we have to find other way to mark the row or col
 */
function setZeroes1(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  function markRow(matrix, m, n, i) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) matrix[i][j] = -1;
    }
  }
  function markCol(matrix, m, n, j) {
    for (let i = 0; i < m; i++) {
      if (matrix[i][j] !== 0) matrix[i][j] = -1;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, m, n, i);
        markCol(matrix, m, n, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
}
