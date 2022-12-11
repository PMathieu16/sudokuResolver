function solveSudoku(sudoku) {
  // Vérifie si un nombre est valide dans une colonne donnée
  const checkColumn = (col, num) => {
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[i][col] === num) return false;
    }
    return true;
  };

  // Vérifie si un nombre est valide dans une ligne donnée
  const checkRow = (row, num) => {
    for (let i = 0; i < sudoku.length; i++) {
      if (sudoku[row][i] === num) return false;
    }
    return true;
  };

  // Vérifie si un nombre est valide dans un bloc 3x3
  const checkBlock = (row, col, num) => {
    let r = Math.floor(row / 3) * 3;
    let c = Math.floor(col / 3) * 3;
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        if (sudoku[i][j] === num) return false;
      }
    }
    return true;
  };

  // Trouve l'emplacement suivant
  const findNext = (row) => {
    for (let i = row; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku.length; j++) {
        if (sudoku[i][j] === 0) return [i, j];
      }
    }
    return false;
  };

  const solve = (row) => {
    let next = findNext(row);
    if (!next) return true;
    let [r, c] = next;
    for (let num = 1; num <= 9; num++) {
      if (checkColumn(c, num) && checkRow(r, num) && checkBlock(r, c, num)) {
        sudoku[r][c] = num;
        if (solve(r, c)) return true;
        sudoku[r][c] = 0;
      }
    }
    return false;
  };

  solve(0, 0);

  return sudoku;
}

console.log(
  solveSudoku([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 3, 4, 5, 6, 7],
    [0, 3, 4, 5, 0, 6, 1, 8, 2],
    [0, 0, 1, 0, 5, 8, 2, 0, 6],
    [0, 0, 8, 6, 0, 0, 0, 0, 1],
    [0, 2, 0, 0, 0, 7, 0, 5, 0],
    [0, 0, 3, 7, 0, 5, 0, 2, 8],
    [0, 8, 0, 0, 6, 0, 7, 0, 0],
    [2, 0, 7, 0, 8, 3, 6, 1, 5],
  ])
);
// Retourne:
// [
//   [5, 7, 6, 8, 2, 1, 3, 4, 9],
//   [8, 1, 2, 9, 3, 4, 5, 6, 7],
//   [9, 3, 4, 5, 7, 6, 1, 8, 2],
//   [7, 4, 1, 3, 5, 8, 2, 9, 6],
//   [3, 5, 8, 6, 9, 2, 4, 7, 1],
//   [6, 2, 9, 1, 4, 7, 8, 5, 3],
//   [4, 6, 3, 7, 1, 5, 9, 2, 8],
//   [1, 8, 5, 2, 6, 9, 7, 3, 4],
//   [2, 9, 7, 4, 8, 3, 6, 1, 5],
// ];
