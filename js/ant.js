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
  var newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  newGroup.setAttribute("id", "ant");
  newGroup.setAttribute("transform", "translate(" + this.origin[0] + ", " + this.origin[1] + ")");

  newEllipse.setAttribute("cx", 50);
  newEllipse.setAttribute("cy", 50);
  newEllipse.setAttribute("rx", 50);
  newEllipse.setAttribute("ry", 30);
  newEllipse.setAttribute("fill", "red");

  newCircle.setAttribute("cx", 20);
  newCircle.setAttribute("cy", 50);
  newCircle.setAttribute("r", 20);
  newCircle.setAttribute("fill", "black");

  newGroup.appendChild(newEllipse);
  newGroup.appendChild(newCircle);

  parentNode.appendChild(newGroup);
};
