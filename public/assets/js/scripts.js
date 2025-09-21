document.addEventListener('DOMContentLoaded', function () {
    // Function to load a component
    function loadComponent(url, placeholderId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const placeholder = document.getElementById(placeholderId);
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
            })
            .catch(error => console.error('Error loading the component:', error));
    }

    // Function to set language on 404 page
    function setInitialLanguageFor404() {
        // Try to get the elements
        const langEs404 = document.getElementById('lang-es-404');
        const langEn404 = document.getElementById('lang-en-404');

        // If we are not on 404 page, return
        if (!langEs404 || !langEn404) return;

        // Get user language
        const htmlTag = document.documentElement;
        const titleTag = document.querySelector('title');
        const userLang = navigator.language.substring(0, 2);

        if (userLang === 'es') {
            // Show content on spanish
            htmlTag.lang = 'es';
            titleTag.textContent = 'Página no Encontrada - Sistema ETR';
            langEs404.style.display = 'block';
        } else {
            // Show content on english
            htmlTag.lang = 'en';
            titleTag.textContent = 'Page Not Found - Sistema ETR';
            langEn404.style.display = 'block';
        }
    }

    // Load footer
    loadComponent('footer.html', 'footer-placeholder');

    // Set language for 404 error
    setInitialLanguageFor404();
});