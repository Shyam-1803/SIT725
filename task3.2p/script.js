// script.js

// Initialize all Materialize JavaScript components when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    var sidenavs = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenavs);

    var scrollspys = document.querySelectorAll('.scrollspy');
    var scrollspyInstances = M.ScrollSpy.init(scrollspys, {scrollOffset: 50});

    var floatingActionButtons = document.querySelectorAll('.fixed-action-btn');
    var floatingActionButtonInstances = M.FloatingActionButton.init(floatingActionButtons, {
        direction: 'left',
        hoverEnabled: false
    });
});

// Function for the regular button click
function demoClick() {
    M.toast({html: 'Hello from the regular button! 👋', classes: 'rounded'});
}

// Function to change the text inside the cards
function changeCardText(cardNumber) {
    // Find the paragraph <p> inside the specific card that was clicked
    // This uses traversal to find the correct element
    let cardElement = event.target.closest('.card');
    let paragraph = cardElement.querySelector('.card-content p');

    // Change the text based on which card was clicked
    paragraph.textContent = "The text was changed dynamically using JavaScript! ✅";

    // Show a toast notification confirming the change
    M.toast({html: 'Card ' + cardNumber + ' text updated!', classes: 'green'});

    // Prevent the default link behavior (which is to jump to the top of the page)
    event.preventDefault();
}