// JavaScript to handle menu toggle and click-outside behavior
const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle menu visibility on button click
menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the menu when clicking outside
document.addEventListener('click', () => {
    dropdownContent.style.display = 'none';
});

// Prevent the menu from closing when clicking inside it
dropdownContent.addEventListener('click', (event) => {
    event.stopPropagation();
});