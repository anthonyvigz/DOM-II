// Your code goes here

//  variable for h1 and mouseover

let header = document.querySelector('h1');

header.addEventListener('mouseover', function(event) {
    header.style.
    gcolor = 'dodgerblue';
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

document.addEventListener('click', function(event) {
    for (let i = 0; i < navBarArray.length; i++) {
        if (navBarArray[i] === event.target) {
            event.target.style.color = 'red';
            event.target.style.color = '0.5s';
        }
    }
    event.preventDefault();
})

//  variable for main text and effect

let paraText = document.querySelectorAll('p');

let parray = Array.from(paraText);

console.log(parray);

parray.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.target.style.fontSize = '2.5em';
        event.target.style.transition = '3s';
        event.stopPropagation();
    })
})


//  variable for h2s and effect

let twoHeaders = document.querySelectorAll('h2');

let headerArray = Array.from(twoHeaders);

twoHeaders.forEach(function(element) {
    element.addEventListener('wheel', function(event) {
        event.target.style.color = 'pink';
        event.target.style.transition = '2s'
        event.stopPropagation();
    })
})


//  variable for content borders

let intro = document.querySelector('.home .intro');

document.addEventListener('keydown', function(event) {
    intro.style.border = '5px solid green';
    intro.style.transition = '3s';
    intro.style.padding = '0px 50px';
})

//  eventlistener to revert content borders

document.addEventListener('keyup', function(event) {
    intro.style.border = '2px dashed grey';
    intro.style.transition = '3s';
    intro.style.padding = '0';
})

//   copy eventlistener

document.addEventListener('copy', function(event) {
    alert('You should not copy that!');
})

//   scroll eventlistener

let body = document.querySelector('body');

document.addEventListener('scroll', function(event) {
    body.style.transition = '4s';
    body.style.backgroundColor = 'lightblue';
})

//   button mouseup and mousedown

let btns = document.querySelectorAll('.btn');

let btnsArray = Array.from(btns);

btnsArray.forEach(function(element) {
    element.addEventListener('mouseup', function(event) {
        event.target.textContent = 'Hurry!';
        event.target.style.transition = '2s'
    })
})

btnsArray.forEach(function(element) {
    element.addEventListener('mousedown', function(event) {
        event.target.textContent = 'Come on!';
        event.target.style.transition = '2s'
    })
})

let buttons = document.querySelectorAll('.btn');

buttons.addEventListener('mouseenter', function(event) {
 event.target.style.color = 'orange';
 setTimeout(function() {
   event.target.style.color = '';
 }, 500);
}, false);

console.log(buttons);