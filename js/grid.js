// describe a grid
function Grid(rows, cols, fillValue) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = new Matrix(rows, cols);
  this.matrix.fillMatrix(fillValue);
}

Grid.prototype.initializeMatrix = function(val) {
  this.matrix.fillMatrix(val);
};
