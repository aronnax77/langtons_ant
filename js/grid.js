// describe a grid
function Grid(rows, cols, cellWidth=100, cellHeight=100, fillValue=0) {
  this.rows = rows;
  this.cols = cols;
  this.width = cellWidth * cols;
  this.height = cellHeight * rows;
  this.matrix = new Matrix(rows, cols);
  this.matrix.fillMatrix(fillValue);
}

// a function to create a grid within an svg element.  Argument 'setStyle' is
// intended to allow for the speedy creation of a grid for development and sets
// the width of the grid to 600px.  Setting this to false will allow final styles
// to be set using css.  The original design allows for a parent node in the form
// of a div element
Grid.prototype.createSVGToggleGrid = function(parentNode, setStyle = true) {
  let newSVG, newEl, newCell;
  if(setStyle) {
    parentNode.style.width = "600px";
    parentNode.style.height = 600*this.rows/this.cols + "px";
  }
  // generate a new svg element
  newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSVG.setAttribute("id", "svg-grid");
  newSVG.setAttribute("width", "100%");
  newSVG.setAttribute("height", "100%");
  newSVG.setAttribute("viewBox", "0 0 " + this.width + " " + this.height);
  newSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  // add grid cells
  for(var i = 1; i < this.rows + 1; i++) {
    for(var j = 1; j < this.cols + 1; j++) {
      newCell = new Cell(i, j);
      newEl = newCell.createSVGToggleCell(i, j);
      this.matrix.setElement(i, j, newCell);
      newSVG.appendChild(newEl);
    }
  }

  parentNode.appendChild(newSVG);

  return newSVG;
};
