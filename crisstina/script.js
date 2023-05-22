// Get all the menu items
var menuItems = document.querySelectorAll('.menu-item');

// Add a click event listener to each menu item
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    // Remove the active class from all menu items
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove('active');
    });

    // Add the active class to the clicked menu item
    this.classList.add('active');

    // Get the section associated with the clicked menu item
    var sectionId = this.getAttribute('data-section');

    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

