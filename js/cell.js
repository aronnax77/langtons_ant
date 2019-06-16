// define a cell
function Cell(width, height, onColor, offColor, status) {
  this.width = width;
  this.height = height;
  this.onColor = onColor;
  this.offColor = offColor;
  this.status = status;
  this.element = undefined;
}

Cell.prototype.createNewCell = function() {
  var newEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  newEl.setAttribute("id", "id_1_1");
  newEl.setAttribute("x", 0);
  newEl.setAttribute("y", 0);
  newEl.setAttribute("width", this.width);
  newEl.setAttribute("height", this.height);
  newEl.setAttribute("fill", this.onColor);
  this.element = newEl;
  return newEl;
};
