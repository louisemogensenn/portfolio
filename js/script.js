
// Nedstående script ændrer billedet på forsiden, når musen køres henover/fjernes fra billedet

let forsidebillede = document.getElementById('forsidebillede'); /* Hentet HTML-elementet med id'et forsidebillede */

forsidebillede.addEventListener('mouseover', () => { // En eventListener, der venter på at musen er over billedet. () angiver, at der køres en funktion, når betingelsen (eventListeneren) opfyldes og denne funktion er, ved hjælp af pilesyntaxen =>, den funktion, der kommer under
    forsidebillede.src = "images/billede2.webp"; // Når betingelsen er opfyldt ændres billedets kilde (source)
});

forsidebillede.addEventListener('mouseleave', () => { // En eventListener, der venter på at musen er over billedet. () angiver, at der køres en funktion, når betingelsen (eventListeneren) opfyldes og denne funktion er, angivet ved hjælp af pilesyntaxen =>, den funktion, der kommer under
    forsidebillede.src = "images/billede1.webp"; // Når betingelsen er opfyldt ændres billedet kilde (source)
});

// Nedstående script ændrer indhold på siden projekter.html alt efter hvilket projekt, der klikkes på på siden projekter.html

// Først hentes relevante HTML-elementer, der gemmes i konstanter, da disse ikke ændrer værdi undervejs

const oversigtOverProjekter = document.getElementById('oversigtOverProjekter'); // Henter HTML-element med id'et oversigtOverProjekter

const projektAarhusJazzFestival = document.getElementById('projektAarhusJazzFestival'); // Hentet HTML-elementet med id'et projektAarhusJazzFestival

const projektSteno = document.getElementById('projektSteno'); // Henter HTML-elementet med id'et projektSteno

const projektNippon = document.getElementById('projektNippon'); // Henter HTML-elementet med id'et projektNippon

const overskriftPaaSider = document.querySelector('.overskriftPaaSider'); // Henter det første HTML-element, der har klassen .overskriftPaaSider

const gruppenavne = document.querySelector('.gruppenavne'); // Henter det første HTML-element, der har klassen .gruppenavne

// Opsætning af arrays hvori indhold opbevares

// Arrays opsættes sådan, at indholdet på hvert index i alle arrays hører sammen (arrays[0] = projekt 1, arrays[1] = projekt 2, arrays[2] = projekt 3)

const projektOverkskrifter = ["aarhus jazz festival", "projekt steno", "projekt nippon"]; // Array med overskrifter for hvert projekt

const gruppemedlemmer = ["Frederik Daugaard-Hansen, Jonas Pedersen, Pernille Christensen & Louise Mogensen", "Frederik Daugaard-Hansen, Jonas Pedersen, Pernille Christensen & Louise Mogensen", "Claire Kahindi Gitaari, Magnus Jørgensen, Pernille Christensen & Louise Mogensen"]; // Array med gruppemedlemmer for hvert projekt

// Opsætning af klik-events for de tre projekter

projektAarhusJazzFestival.addEventListener('click', visProjektAarhusJazzFestival); 
// En eventListener, der lytter efter et klik på HTML-elementet refereret af konstanten.
// Når der klikkes, kaldes funktionen visProjektX – men først på klik-tidspunktet.
// Der er ingen parenteser efter funktionens navn, da det ellers ville betyde, at funktionen blev kaldt med det samme i stedet for at vente på klik-eventet.

projektSteno.addEventListener('click', visProjektSteno); 

projektNippon.addEventListener('click', visProjektNippon); 

// Opsætning af funktioner

function skjulOversigtOverProjekter() {
    oversigtOverProjekter.style.visibility = 'hidden';
}

function visProjektAarhusJazzFestival() {
    skjulOversigtOverProjekter(); // Først skjules oversigten
    overskriftPaaSider.innerHTML = projektOverkskrifter[0]; // Den første værdi i arrayet hentes
    gruppenavne.innerHTML = gruppemedlemmer[0]; // Den første værdi i arrayet hentes
}

function visProjektSteno() {
    skjulOversigtOverProjekter(); // Først skjules oversigten
    //Angiv indhold her
}

function visProjektNippon() {
    skjulOversigtOverProjekter(); // Først skjules oversigten
    //Angiv indhold her
}
