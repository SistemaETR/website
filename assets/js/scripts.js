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

    // Additional UI elements to translate
    const navHomeButton = document.getElementById('nav-home-button');
    const footerPrivacyLink = document.getElementById('footer-privacy-link');
    const footerTermsLink = document.getElementById('footer-terms-link');

    function updateUIText(lang) {
        const htmlTag = document.documentElement;
        const titleTag = document.querySelector('title');

        if (lang === 'es') {
            // Change to spanish
            htmlTag.lang = 'es';
            titleTag.textContent = 'Aviso de Privacidad - Sistema ETR';
            if(navHomeButton) navHomeButton.textContent = 'Inicio';
            if(footerPrivacyLink) footerPrivacyLink.textContent = 'Aviso de Privacidad';
            if(footerTermsLink) footerTermsLink.textContent = 'Términos y Condiciones';
            if(langEsDiv) langEsDiv.style.display = 'block';
            if(langEnDiv) langEnDiv.style.display = 'none';
            if(flagImage) {
                flagImage.src = 'assets/images/ic_flag_usa.svg';
                flagImage.alt = 'Switch to English';
            }
        } else {
            // Change to english
            htmlTag.lang = 'en';
            titleTag.textContent = 'Privacy Policy - Sistema ETR';
            if(navHomeButton) navHomeButton.textContent = 'Home';
            if(footerPrivacyLink) footerPrivacyLink.textContent = 'Privacy Policy';
            if(footerTermsLink) footerTermsLink.textContent = 'Terms of Service';
            if(langEnDiv) langEnDiv.style.display = 'block';
            if(langEsDiv) langEsDiv.style.display = 'none';
            if(flagImage) {
                flagImage.src = 'assets/images/ic_flag_mexico.svg';
                flagImage.alt = 'Cambiar a Español';
            }
        }
    }

    // Function to set language based on the navigator
    function setInitialLanguage() {
        if (!langEsDiv || !langEnDiv) return; 

        const userLang = navigator.language.substring(0, 2);
        
        // Call the function to set initial language
        updateUIText(userLang === 'es' ? 'es' : 'en');
    }

    // Function to set language based on the navigator
    setInitialLanguage();

    // Change language
    if (switcherButton) {
        switcherButton.addEventListener('click', () => {
            const isSpanishVisible = langEsDiv.style.display !== 'none';
            
            // Update UI
            updateUIText(isSpanishVisible ? 'en' : 'es');
        });
    }

});