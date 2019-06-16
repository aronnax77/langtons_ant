// describe a matrix
function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.contents = new Array(rows*cols).fill(0);
}

Matrix.prototype.printMatrix = function() {
  let row, col;
  let temp = [];
  for(row = 1; row < this.rows + 1; row++) {
    for(col = 1; col < this.cols + 1; col++) {
      temp.push(this.getElement(row, col));
    }
    console.log(temp);
    temp = [];
  }
};

Matrix.prototype.setElement = function(i, j, value) {
  // get indexed position in contents
  let pos = this.posToIndex([i, j]);
  this.contents[pos] = value;
};

Matrix.prototype.getElement = function(i, j) {
  let pos = this.posToIndex([i, j]);
  return this.contents[pos];
};

// Method to convert the index of the grid arr to a position in the visual array
// Please note that grid positions start at [1, 1] and are held in an array of
// two dimensions
Matrix.prototype.indexToPos = function(i) {
  var pos = [];
  var r, c;
  r = parseInt(i / this.cols) + 1;
  c = i % this.cols + 1;
  return [r, c];
};

// Method to convert the position in the visual array to the index in the grid arr
// Please note that grid positions start at [1, 1] and are held in an array of two
Matrix.prototype.posToIndex = function(pos) {
  var r = pos[0];
  var c = pos[1];
  var index = (r - 1) * this.cols + c - 1;
  return index;
};

Matrix.prototype.fillMatrix = function(val) {
  let row, col;
  for(row = 1; row < this.rows + 1; row++) {
    for(col = 1; col < this.cols + 1; col++) {
      this.setElement(row, col, val);
    }
  }
};

// var m = new Matrix(6, 8);
// //m.setElement(1, 1, 23);
// m.fillMatrix(false);
// m.printMatrix();
