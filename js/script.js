// Scroll Effect
// AOS (Animate On Scroll) JavaScript library that allows you to animate elements on webpage as they come into view when scrolling
// .init(): is a function, when called, the animations will start working 
AOS.init();

// Slider
// uses the querySelector method to find the element
var elem = document.querySelector('.main-carousel');
// this part is about setting the rules for the slides
var flkty = new Flickity( elem, {
  // makes the photos start from the left side
  cellAlign: 'left',
  // keeps the carousel from going outside the container and keeping it in the "box"
  contain: true
});

// Pop-up
// waits for html content to be fully loaded before js function starts
document.addEventListener('DOMContentLoaded', function () {
// selects elements that trigger the opening of the modal
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
// selects elemesnts that trigger the closing of the modal
  const modalCloses = document.querySelectorAll('[data-modal-close]');

// runs when element is triggered
  modalTriggers.forEach(trigger => {
// click event listener runs the function inside curl braces when clicked
    trigger.addEventListener('click', () => {
// data-modal-target contains ID of the modal to be opened
        const target = trigger.dataset.modalTarget;
// selects modal element from the ID to be obtianed from the trigger
        const modal = document.getElementById(target);
// sets the display property of the modal to block so that it is visible
        modal.style.display = 'block';

// delays the execution of the code inside arrow function by 300ms
        setTimeout(() => {
// this sets the opacity to 1 which makes it fully visible
            modal.style.opacity = '1';
        }, 300); 
    });
});

  modalCloses.forEach(close => {
// when clicked the model will have an opacity of 0 which means it's "closed"
    close.addEventListener('click', () => {
        const target = close.dataset.modalClose;
        const modal = document.getElementById(target);

        modal.style.opacity = '0';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
});
});

// Dropdown Menu
$(document).ready(function(){
// selects elements with the class "dropdown" so that when the mouse is hovered over the element this function starts
  $('.dropdown').hover(function(){
      $(this).find('.dropdown-content').stop(true, true).slideDown(500);
  }, function(){
      $(this).find('.dropdown-content').stop(true, true).slideUp(500);
  });
});

// Box Hover Effect
$(document).ready(function() {
// selects elements with the class "info-box" and attatches two event handlers to them
// one for hover in and hover out
// "1" is for making the stack order appear
  $(".info-box").hover(
    function() {
      $(this).css("z-index", "1");
    },
// this is so that the element will return to the original position
    function() {
      $(this).css("z-index", "initial"); 
    }
  );
});

