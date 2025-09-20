document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year to the current year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Logic for language selector
    const switcherButton = document.getElementById('language-switcher');
    const flagImage = document.getElementById('language-flag');
    const langEsDiv = document.getElementById('lang-es');
    const langEnDiv = document.getElementById('lang-en');
    const htmlTag = document.documentElement;
    const titleTag = document.querySelector('title');

    // Function to set language based on the navigator
    function setInitialLanguage() {
        if (!langEsDiv || !langEnDiv) return;

        // Get first two characters of navigator's language
        const userLang = navigator.language.substring(0, 2);

        if (userLang === 'es') {
            // Show content on spanish
            langEsDiv.style.display = 'block';
            langEnDiv.style.display = 'none';
            flagImage.src = 'assets/images/ic_flag_usa.svg';
            flagImage.alt = 'Switch to English';
            htmlTag.lang = 'es';
            titleTag.textContent = 'Aviso de Privacidad - Sistema ETR';
        } else {
            // Show content on english
            langEnDiv.style.display = 'block';
            langEsDiv.style.display = 'none';
            flagImage.src = 'assets/images/ic_flag_mexico.svg';
            flagImage.alt = 'Cambiar a Español';
            htmlTag.lang = 'en';
            titleTag.textContent = 'Privacy Policy - Sistema ETR';
        }
    }

    // Call the function to detect the language when the page is loaded
    setInitialLanguage();

    // Change language using the floating button
    if (switcherButton) {
        switcherButton.addEventListener('click', () => {
            const isSpanishVisible = langEsDiv.style.display !== 'none';

            if (isSpanishVisible) {
                // Change to english
                langEsDiv.style.display = 'none';
                langEnDiv.style.display = 'block';
                flagImage.src = 'assets/images/ic_flag_mexico.svg';
                flagImage.alt = 'Cambiar a Español';
                htmlTag.lang = 'en';
                titleTag.textContent = 'Privacy Policy - Sistema ETR';
            } else {
                // Change to spanish
                langEnDiv.style.display = 'none';
                langEsDiv.style.display = 'block';
                flagImage.src = 'assets/images/ic_flag_usa.svg';
                flagImage.alt = 'Switch to English';
                htmlTag.lang = 'es';
                titleTag.textContent = 'Aviso de Privacidad - Sistema ETR';
            }
        });
    }

});