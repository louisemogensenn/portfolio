
// Sikrer funktionalitet på forsiden

let forsidebillede = document.getElementById('forsidebillede'); /* Hentet HTML-elementet med id'et forsidebillede */

forsidebillede.addEventListener('mouseover', () => {
    forsidebillede.src = "images/billede2.webp";
});

forsidebillede.addEventListener('mouseleave', () => {
    forsidebillede.src = "images/billede1.webp";
});

