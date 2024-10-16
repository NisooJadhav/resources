// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const resources = document.querySelectorAll('.resource-card');
    resources.forEach(resource => {
        const resourceText = resource.textContent.toLowerCase();
        resource.style.display = resourceText.includes(searchTerm) ? '' : 'none';
    });
});

// Category filter
function filterCategory(category) {
    const resources = document.querySelectorAll('.resource-card');
    resources.forEach(resource => {
        if (category === 'all' || resource.dataset.category === category) {
            resource.style.display = '';
        } else {
            resource.style.display = 'none';
        }
    });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = themeToggle.textContent === '🌙' ? '🌞' : '🌙';
}

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Load translations from the languages.json file
function loadLanguage(lang) {
    fetch('languages.json')
        .then(response => response.json())
        .then(data => {
            const translation = data[lang];  // Access the selected language section in the JSON
            
            // Update the title
            document.title = translation.title;
            document.querySelector('h1').textContent = translation.title;

            // Update search placeholder
            document.getElementById('search-input').placeholder = translation.search_placeholder;

            // Update category buttons
            const categoryButtons = document.querySelectorAll('.category-filter button');
            const categories = translation.categories;
            categoryButtons.forEach((button, index) => {
                const categoryKey = Object.keys(categories)[index];
                button.textContent = categories[categoryKey];
            });

            // Update theme toggle and back-to-top button
            document.getElementById('theme-toggle').textContent = translation.theme_toggle;
            document.getElementById('back-to-top').textContent = translation.back_to_top;
        })
        .catch(error => console.error("Error loading language:", error));
}

// Language selection event listener
const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', function () {
    const selectedLang = this.value;  // Get the selected language from the dropdown
    loadLanguage(selectedLang);  // Load the selected language
});

// Load default language (English) on page load
loadLanguage('en');

let lastScrollTop = 0; // Store the last scroll position
const languageSelect = document.getElementById('language-selector');

// Hide language selector on scroll down
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user scrolled down
    if (currentScroll > lastScrollTop) {
        languageSelect.style.opacity = '0'; // Fade out
        languageSelect.style.transition = 'opacity 0.3s ease'; // Smooth transition
    } else {
        languageSelect.style.opacity = '1'; // Fade in
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
