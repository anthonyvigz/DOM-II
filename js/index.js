// Your code goes here

//  variable for h1 and mouseover

let header = document.querySelector('h1');

header.addEventListener('mouseover', function(event) {
    header.style.color = 'dodgerblue';
    header.style.transition = '1s';
    header.style.fontSize = '5em';
})

//  variable for header image and effect

let headerImg = document.querySelector('.container .intro img');

headerImg.addEventListener('dblclick', function(event) {
    console.log(event);
    headerImg.style.opacity = '0.5';
    headerImg.style.transition = '1s';
})

//  variable for navbar and effect

let navBar = document.querySelectorAll('.nav a');
let navBarArray = Array.from(navBar);
console.log(navBarArray);

document.addEventListener('click', function(event) {
    for (let i = 0; i < navBarArray.length; i++) {
        if (navBarArray[i] === event.target) {
            event.target.style.color = 'red';
            event.target.style.color = '0.5s';
        }
    }
})

//  variable for main text and effect

let paraText = document.querySelectorAll('p');

let parray = Array.from(paraText);

console.log(parray);

parray.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.target.style.fontSize = '2.5em';
        event.target.style.transition = '3s';
    })
})


//  variable for h2s and effect

let twoHeaders = document.querySelectorAll('h2');

let headerArray = Array.from(twoHeaders);

twoHeaders.forEach(function(element) {
    element.addEventListener('wheel', function(event) {
        event.target.style.color = 'pink';
        event.target.style.transition = '2s'
    })
})


//  variable for content borders

let intro = document.querySelector('.home .intro');

document.addEventListener('keydown', function(event) {
    intro.style.border = '5px solid green';
    intro.style.transition = '3s';
    intro.style.padding = '0px 30px';
})