function getFirstSelector(selector) {
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
  var selected = document.getElementById('nested').querySelector('div.target')
  return selected
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(var i = 0; i <lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  return lis
}

function deepestChild() {
  const div = document.getElementById('grand-node').querySelectorAll('div')
  return div[3]
}
