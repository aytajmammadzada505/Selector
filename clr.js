
task 1
const box = document.querySelector('#Colorbox');
const btn = document.querySelector('#btn');
const colors = ["red", "yellow", "orange"];
let index = 0;
btn.addEventListener("click", function () {
    box.style.background = colors[index]
});

btn.addEventListener('click', function () {
    box.style.background = colors[index]
    index = (index + 1) % colors.length;
});



//task 2
const boxes = document.querySelectorAll('.card');

boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        box.style.borderColor = "red";
    });
}); 

//task 3 (wip)
const circle = document.getElementById("circle");

circle.addEventListener("dblclick", function () {
    circle.style.scale = 2
}); 

