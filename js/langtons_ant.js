// var m = new Matrix(2, 3);
// var c = new Cell(100, 100, "#000", "#fff", "off");
// m.fillMatrix(c);
// console.log(m);

var newGrid;

function handleClick(evt) {
  let cell;
  var pos = getPosFromID(evt.target.id);
  cell = newGrid.matrix.getElement(pos[0], pos[1]);
  if(cell.status === "off") {
    evt.target.setAttribute("fill", cell.onColor);
    cell.status = "on";
  } else {
    evt.target.setAttribute("fill", cell.offColor);
    cell.status = "off";
  }
}

function getPosFromID(id) {
  let arr = id.split("_").map(Number);
  return arr;
}

var conEl = document.querySelector("#container");
conEl.addEventListener("click", handleClick);


var svgEl = document.querySelector("#svg-grid");

newGrid = new Grid(4, 6, 0);
console.log(newGrid);
newGrid.createSVGGrid(svgEl);
