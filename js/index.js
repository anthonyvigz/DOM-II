// Your code goes here

//  variable for h1 and mouseover
let header = document.querySelector('h1');

header.addEventListener('mouseover', function(event) {
    header.style.color = 'dodgerblue';
    header.style.transition = '1s';
    header.style.fontSize = '5em';
})