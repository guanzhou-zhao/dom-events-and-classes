// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  clear(evt);
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.preventDefault();
  clear(evt);
  evt.target.classList.toggle('blue');
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide (evt) {
  evt.preventDefault();
  clear(evt);
  evt.target.classList.toggle('invisible');
  updateCounts();
}

function clear(evt) {
  var classList = evt.target.classList;
  if (classList.contains('blue')) {
    classList.remove('blue')
  }
  if (classList.contains('green')) {
    classList.remove('green')
  }
  if (classList.contains('invisible')) {
    classList.remove('invisible')
  }
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  var dots = document.getElementsByClassName('board')[0].children;
  var blueCount = 0, greenCount = 0, invisibleCount = 0;
  for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    if (dot.classList.contains('blue')) {
      blueCount++;
    } else if (dot.classList.contains('green')) {
      greenCount++;
    } else if (dot.classList.contains('invisible')) {
      invisibleCount++;
    }
  }
  totals.blue = blueCount;
  totals.green = greenCount;
  totals.invisible = invisibleCount;
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
