let blocks = document.querySelectorAll('.block');

// separate blocks array

let blocksArray = Array.from(blocks);

// block container

let containerBlock = document.querySelector('.blocks');


// to the top

containerBlock.addEventListener('click', function(event) {
    containerBlock.prepend(event.target)
    event.stopPropagation();
})

//  to the right

containerBlock.addEventListener('mousedown', function(event) {
    event.target.style.marginLeft = 'auto';
    event.target.style.transition = '10s'
})