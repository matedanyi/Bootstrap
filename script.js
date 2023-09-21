'use strict';

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav').addEventListener('onclick', function (e) {
    this.style.backgroundColor = randomColor();
});

console.log(randomInt(0, 255));

console.log(randomColor(0, 255));
