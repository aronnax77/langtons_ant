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

Grid.prototype.createSVGGrid = function(parentRef) {
  let newEl, cell;
  for(var i = 1; i < this.rows + 1; i++) {
    for(var j = 1; j < this.cols + 1; j++) {
      cell = new Cell(i, j, 100, 100);
      newEl = cell.createSVGCell(i, j);
      this.matrix.setElement(i, j, cell);
      parentRef.appendChild(newEl);
    }
  }
};
