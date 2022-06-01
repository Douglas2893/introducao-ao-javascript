var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function mais() {
    if(currentNumber >= 0 && currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}
function menos() {
    if(currentNumber > 0 && currentNumber <= 10) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

var bottonSubtrair = document.getElementById("menos").addEventListener("click", menos);
var bottonAdicionar = document.getElementById("mais").addEventListener("click", mais);
