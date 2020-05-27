
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    // Hint: figure out which element the user clicked from the event object:
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    document.querySelector('.preview').className = "preview active";
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    // document.querySelector('body').style.overflow = 'hidden';
    // document.querySelector('body').window.scrollTop = 0;
}
// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
  card.onclick = showPhoto;
}



// PART 3: Close functionality
const close = () => {
  console.log('close me');
  document.querySelector('.preview').className = "preview";
  document.querySelector('body').style.overflow = '';
    // a. This function should remove the “active” class from the
    //    “.preview_box” element.
    // b. Attach your newly created “close” function to the onclick
    //    event handler of the close button (in the upper right-hand corner).
};

document.querySelector('#close').onclick = close;

// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.


const next = () => {
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    console.log(activeCard.nextElementSibling);
    document.querySelector('.featured_image').style.backgroundImage = activeCard.nextElementSibling.style.backgroundImage;
    activeCard = activeCard.nextElementSibling;
}

document.querySelector('#next').onclick = next;

const prev = () => {
    console.log(activeCard.previousElementSibling);
    document.querySelector('.featured_image').style.backgroundImage = activeCard.previousElementSibling.style.backgroundImage;
    activeCard = activeCard.previousElementSibling;
}

document.querySelector('#prev').onclick = prev;
