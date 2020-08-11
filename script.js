var num = document.querySelector("P");
var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var count = 0;
add.addEventListener('click', addToNum);
sub.addEventListener('click', subFromNum);
function addToNum() {
    num.innerHTML = ++count;
    displayColor();
}
function subFromNum() {
    num.innerHTML = --count;
    displayColor();
}
function displayColor() {
    if (count == 0) {
        num.style.color = "grey";
    }
    if (count > 0) {
        num.style.color = "green";
    }
    if (count < 0) {
        num.style.color = "red";
    }
}