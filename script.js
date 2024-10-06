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