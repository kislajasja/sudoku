function isCorrect(matrix, row, col, x) {
  for (let i = 0; i < 9; i++) {
    const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const b = 3 * Math.floor(col / 3) + (i % 3);
    if (matrix[row][i] === x || matrix[i][col] === x || matrix[a][b] === x) {
      return false;
    }
  }
  return true;
}

module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        for (let x = 1; x <= 9; x++) {
          if (isCorrect(matrix, i, j, x)) {
            matrix[i][j] = x;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
};
