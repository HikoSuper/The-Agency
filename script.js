// JavaScript to switch between tabs
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function showTab(tabName) {
        tabContents.forEach(content => {
            if (content.id === tabName) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    // Event listener for each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabName = link.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Initially show the "home" tab
    showTab('home');
});
