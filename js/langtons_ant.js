// declare variables
var newGrid, conEl, newGrid, newAnt;

// function to handle click event on the cells of the grid
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

// helper function used by handleClick to get the matrix array reference for
// the cell that was clicked
function getPosFromID(id) {
  let arr = id.split("_").map(Number);
  return arr;
}

// get a reference to the grid-container
conEl = document.querySelector("#grid-container");
conEl.addEventListener("click", handleClick);

// create and display grid
newGrid = new Grid(11, 11);
newAnt = new Ant(6, 6);
var svgEl = newGrid.createSVGToggleGrid(conEl);

var svgElem = document.querySelector("#svg-grid");
newAnt.createSVGAnt01(svgEl);
console.log(newAnt);
// newAnt.turnLeftSVGAnt01();
// newAnt.moveForwardSVGAnt01(newGrid);
// newAnt.moveForwardSVGAnt01(newGrid);
// newAnt.moveForwardSVGAnt01(newGrid);
// newAnt.moveForwardSVGAnt01(newGrid);
// console.log(newAnt);
