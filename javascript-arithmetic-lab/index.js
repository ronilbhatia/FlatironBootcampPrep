function add(a,b) {
  return a + b
}

function subtract (a,b) {
  return a - b
}

function multiply (a,b) {
  return a * b
}

function divide (a,b) {
  return a / b
}

function inc(a) {
  a++
  return a
}

function dec(a) {
  a--
  return a
}

function makeInt(a) {
  return parseInt(a,10)
}

function preserveDecimal(a) {
  return parseFloat(a)
}

console.log(makeInt(0*2038))
console.log(preserveDecimal("mumbo jumbo"))