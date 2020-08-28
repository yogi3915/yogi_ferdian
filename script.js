let inputBlue = document.getElementById('btnBlue')
let inputRed = document.getElementById('btnRed')
let inputYellow = document.getElementById('btnYellow')
let btnCek = document.getElementById('btnCek')
let resultBox = document.getElementById('result')
var triggerBlue = false
var triggerRed = false
var triggerYellow = false


btnCek.addEventListener('click', function () {})

inputBlue.addEventListener('click', function () {
  triggerBlue = !triggerBlue
  if (triggerBlue) {
    inputBlue.style.backgroundColor = 'blue'
  } else {
    inputBlue.style.backgroundColor = 'white'
  }
  changeResultColour()
})

inputRed.addEventListener('click', function () {
  triggerRed = !triggerRed
  if (triggerRed) {
    inputRed.style.backgroundColor = 'red'
  } else {
    inputRed.style.backgroundColor = 'white'
  }
  changeResultColour()
})

inputYellow.addEventListener('click', function () {
  triggerYellow = !triggerYellow
  if (triggerYellow) {
    inputYellow.style.backgroundColor = 'yellow'
  } else {
    inputYellow.style.backgroundColor = 'white'
  }
  changeResultColour()
})

function changeResultColour() {
  console.log('function jalan')
  if (triggerBlue && triggerYellow) {
    resultBox.style.backgroundColor = 'green'
  } else if (triggerYellow && triggerRed) {
    resultBox.style.backgroundColor = 'orange'
  }
}