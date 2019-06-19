// define a cell
function Cell(i, j, width=100, height=100, onColor="lightyellow", offColor="lightblue", borderColor="grey", status="off") {
  this.i = i;
  this.j = j;
  this.width = width;
  this.height = height;
  this.onColor = onColor;
  this.offColor = offColor;
  this.borderColor = borderColor;
  this.status = status;
  this.origin = [(this.width * (j -1)), (this.height * (i - 1))];
}

/*                ACCESSORS - GETTERS AND SETTERS                         */

Cell.prototype.getWidth = function() {
  return this.width;
};

Cell.prototype.getHeight = function() {
  return this.height;
};

Cell.prototype.getOnColor = function() {
  return this.onColor;
};

Cell.prototype.setOnColor = function(clr) {
  this.onColor = clr;
};

Cell.prototype.getOffColor = function() {
  return this.offColor;
};

Cell.prototype.setOffColor = function(clr) {
  this.offColor = clr;
};

Cell.prototype.getStatus = function() {
  return this.status;
};

Cell.prototype.setOffColor = function(st) {
  this.status = st;
};

// function to toggle the value of the status flag
Cell.prototype.toggleStatus = function() {
  this.status==="off" ? this.status="on" : this.status="off";
};

// function to create an svg cell which can be toggled as a switch element
Cell.prototype.createSVGToggleCell = function(i, j) {
  var newEl = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  newEl.setAttribute("id", i + "_" + j);
  newEl.setAttribute("x", this.origin[0]);
  newEl.setAttribute("y", this.origin[1]);
  newEl.setAttribute("width", this.width);
  newEl.setAttribute("height", this.height);
  newEl.setAttribute("fill", this.offColor);
  newEl.setAttribute("stroke", this.borderColor);
  return newEl;
};
