
// task 1
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

//task 3 
const circle = document.getElementById("circle");
let large = false;

circle.addEventListener("dblclick", () => {
    large = !large;
    circle.style.transform = large ? 'scale(1.5)' : 'scale(1)';
});

//task 4 
const textarea = document.getElementById('txt');
const counter = document.getElementById('counter');
const maxLength = 100;

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length; 
    counter.textContent = maxLength - currentLength;
});


//task 5
const colors = document.getElementById('colors');
colors.addEventListener('change', (Event) => {
    const selectedColor = Event.target.value;
    document.body.style.backgroundColor = selectedColor;
})


//task 6
const former = document.getElementById('former');
const put = document.getElementById('put');

former.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = put.value.trim();
    if (name) {
        alert("Uğurludur!");
    }
    else {
        alert("xəta");
    }
});

//task 7
const box = document.querySelector(".box");
box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'brown'
})

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'red'
})
//task 8
const buttons = document.querySelectorAll('button');
const totalPrice = document.getElementById('total');
let amount = 0;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const price = Number(this.dataset.price);
        amount += price;
        totalPrice.textContent = amount;
    });
});

//task 9
const texts = document.getElementById('mytext');

texts.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log("Enter düyməsinə basıldı!");
    }

}
)
