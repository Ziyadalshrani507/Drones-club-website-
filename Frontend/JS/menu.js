document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle menu visibility on button click
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('active');
    });
    
    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        // Check if click is outside of menu and menu button
        if (!dropdownContent.contains(event.target) && !menuButton.contains(event.target)) {
            menuButton.classList.remove('active');
        }
    });
    
    // Prevent menu from closing when clicking inside it
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Add escape key support to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menuButton.classList.contains('active')) {
            menuButton.classList.remove('active');
        }
    });
    
    // Ensure links work properly
    const menuLinks = document.querySelectorAll('.dropdown-content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Keep navigation behavior but close menu
            setTimeout(() => {
                menuButton.classList.remove('active');
            }, 100);
        });
    });
});