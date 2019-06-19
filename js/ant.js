// create and ant constructor
function Ant(i, j, width=100, height=100, direction="west") {
  this.i = i;
  this.j = j;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.origin = [(this.width * (j -1)), (this.height * (i - 1))];
}

/*                   ACCESSORS - getters and setters                */

Ant.prototype.getI = function() {
  return this.i;
};

Ant.prototype.setI = function(i) {
  this.i = i;
};

Ant.prototype.getJ = function() {
  return this.j;
};

Ant.prototype.setJ = function(j) {
  this.j = j;
};

Ant.prototype.getWidth = function() {
  return this.width;
};

Ant.prototype.setWidth = function(width) {
  this.width = width;
};

Ant.prototype.getHeight = function() {
  return this.height;
};

Ant.prototype.setHeight = function(height) {
  this.height = height;
};

Ant.prototype.getDirection = function() {
  return this.direction;
};

Ant.prototype.setDirection = function(direction) {
  this.height = direction;
};

Ant.prototype.getOrigin = function() {
  return this.origin;
};

Ant.prototype.setOrigin = function(origin) {
  this.height = origin;
};

// function to return the SVG representation of an ant
Ant.prototype.createSVGAnt = function(parentNode) {
  var newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  var newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  newGroup.setAttribute("id", "ant");
  newRect.setAttribute("x", this.origin[0]);
  newRect.setAttribute("y", this.origin[1]);
  newRect.setAttribute("width", this.width);
  newRect.setAttribute("height", this.height);
  newRect.setAttribute("fill", none);

  newEllipse.setAttribut("cx", this.origin[0] + 50);
  newEllipse.setAttribut("cy", this.origin[1] + 50);
  newEllipse.setAttribut("rx", 50);
  newEllipse.setAttribut("rx", 30);
  newEllipse.setAttribut("fill", "red");

  newGroup.appendChild(newRect);
  newGroup.appendChild(newEllipse);

  parentNode.appendChild(newGroup);
};
