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