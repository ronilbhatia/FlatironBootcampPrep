var coins = ['bitcoin']
console.log(coins)
coins.push('ethereum')
console.log(coins)
coins = [...coins, 'litecoin']
console.log(coins)
var coin = 'zcash'
console.log(coin + 'is the new bitcoiin')

function forLoop(array) {
  for(var i = 0; i<25; i++) {
    if(i===1) {
    array = ([...array, "I am " + i + " strange loop."])
  } else {
    array = ([...array, "I am " + i + " strange loops."])
  }
  }
  return array
}

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)
  }
  return `done`
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
  return array
}
