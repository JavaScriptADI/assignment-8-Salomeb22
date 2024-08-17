//task 1
const button = document.createElement('button');
const body = document.body;

body.appendChild(button);
button.style.background = 'pink';
button.innerText = 'Task';

//task 2
const liDiv = document.getElementById('ul-element');
for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerText = 'Task';
    ul-element.appendChild(li);
}

//task 3
function random() {
    return parseInt(Math.random() * 256);
}

function randomColour() {
     return `rgb(${random()}, ${random()}, ${random()})`;
}

let button1 = document.getElementById('button');
button1.addEventListener('click', (e) => {
    button1.style.background = randomColour();
});

//task 4
const paragraph2 = document.getElementById('btn');
const paragraph1 = document.getElementById('paragraph');
function changeP (text) {
    btn.addEventListener ('click', (e) => {
        paragraph.innerText = 'text'; 
    })
    return paragraph;
}