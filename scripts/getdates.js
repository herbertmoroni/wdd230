function updateFooterDates() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    // Update the copyright year
    const copyrightElement = document.querySelector('footer p');
    copyrightElement.textContent = `© ${currentYear} Herbert Moroni Gois, Utah`;

    // Update the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Updated: ${lastModified}`;
}

document.addEventListener('DOMContentLoaded', updateFooterDates);
