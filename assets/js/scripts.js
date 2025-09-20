document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year to the current year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});