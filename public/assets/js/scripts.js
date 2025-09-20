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
            .catch(error => console.error('Error al cargar el componente:', error));
    }

    // Load footer
    loadComponent('footer.html', 'footer-placeholder');
});