
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!!matrix && matrix != '') {
    let newArr = [];
    let newKArr = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrix[i].reverse();
        newKArr.push(matrix[i]);
      }
      for (let k = 0; k < matrix[i].length; k++) {
        newArr.push(matrix[i][k]);
      }
    }
    return newArr;
  } else {
    return [];
  }
}