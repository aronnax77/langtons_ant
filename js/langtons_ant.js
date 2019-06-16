// var m = new Matrix(2, 3);
// var c = new Cell(100, 100, "#000", "#fff", "off");
// m.fillMatrix(c);
// console.log(m);

var svgEl = document.querySelector("#svg-grid");
var c = new Cell(100, 100, "#00f", "#eee", "off");
var el = c.createNewCell();
console.log(el);
svgEl.appendChild(el);
console.log(c);
