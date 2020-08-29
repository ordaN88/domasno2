var broj = prompt("Vnesi broj");
var parsiranBroj = parseInt(broj);
if (parsiranBroj > 0) {
  console.log("Brojot e pozitiven");
} else if (parsiranBroj < 0) {
  console.log("brojot e negativen");
} else {
  console.log("Brojot e 0");
}
// --------------------------------------------------
var broj1 = promt("Vnesi broj");
var parseBroj1 = parseInt(broj);
if (parseBroj1 > 0) {
  console.log("Brojot e pozitiven");
} else if (parsBroj < 0) {
  console.log("brojot e negativen");
} else {
  console.log("Brojot e 0");
}
// prepisuvanje na prava vezba so mali izmeni
// ---------------------------------------------------
var broj1 = prompt("Vnesi prv broj");
var broj2 = prompt("Vnesi vtor broj");

var parseBroj1 = parseInt(broj1);
var parseBroj2 = parseInt(broj2);

if (parseBroj1 > parseBroj2) {
  console.log("Prviot broj e pogolem");
} else if (parseBroj1 === parseBroj2) {
  console.log("Broevite se ednakvi");
} else {
  console.log("Vtorniot broj e pogolem");
}
// --------------------------------------------------

var godinaString = prompt("Vnesi godina");
var godinaNumber = parseInt(godinaString);

if (godinaNumber % 4 === 0) {
  console.log("Godinata e prestapna");
} else {
  console.log("Godinata ne e prestapna");
}

// --------------------------------------------------
var xString = prompt("Vnesi tocka X");
var yString = prompt("Vnesi tocka Y");

var x = parseInt(xString);
var y = parseInt(yString);

if (x > 0 && y > 0) {
  console.log("prv kvadrant");
} else if (x > 0 && y < 0) {
  console.log("vtor kvadrant");
} else if (x < 0 && y < 0) {
  console.log("tret kvadrant");
} else if (x < 0 && y > 0) {
  console.log("cetvrt kvadrant");
} else {
  console.log("koordinaten pocetok");
}
// --------------------------------------------------
var broj1String = prompt("Vnesi broj 1");
var broj2String = prompt("Vnesi broj 2");
var operatorString = prompt("Vnesi operator");

var broj1 = parseInt(broj1String);
var broj2 = parseInt(broj2String);

if (operatorString === "+") {
  console.log(broj1 + broj2);
} else if (operatorString === "-") {
  console.log(broj1 - broj2);
} else if (operatorString === "*") {
  console.log(broj1 * broj2);
} else if (operatorString === "/") {
  console.log(broj1 / broj2);
}
