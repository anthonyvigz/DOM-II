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

console.log(headerImg);

headerImg.addEventListener('dblclick', function(event) {
    console.log(event);
    headerImg.style.opacity = '0.5';
    headerImg.style.transition = '1s';
})