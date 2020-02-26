// ./plusOuMoins.js

/*

    Définition des fonctions pour le jeu

*/

/**
 * Mise à jour temps restant
 */
function setTimeLeftOnPage() {

    // On récupère l'élément dans lequel on affiche le temps restant
    // On insère le temps restant
    $('#timeLeftValue').html(timeLeft);
}

/**
 * Evaluation d'un essai
 */
function evaluateResponse() {

    console.log("👀 Évaluation de la réponse 👀");

    // On récupère la valeur saisie
    const response = $('#guessInput').val();
    console.log("👉 Réponse : " + response);

    // Conditions sur la réponse
    if(response < mystery) {
        // Si nombre saisie trop petit ...
        itsMore();
    } else if (response > mystery) {
        // Si nombre saisie trop grand ...
        itsLess();
    } else {
        // C'est gagné !
        youWin();
    }
}

/**
 * Réglages des affichages lorsque le nombre saisie est trop petit
 */
function itsMore() {

    console.log("👍 Give me more 👍")

    // On cache les indices précédents
    $('#less').hide();
    // On affiche l'indice adéquat
    $('#more').show();
}

/**
 * Réglages des affichages lorsque le nombre saisie est trop grand
 */
function itsLess() {

    console.log("👎 Not so much 👎")

    // On cache les indices précédents
    $('#more').hide();
    // On affiche l'indice adéquat
    $('#less').show();
}

/**
 * Réglages d'affichages et fin du jeu quand la partie est gagnée
 */
function youWin() {

    console.log("👏 We have a WINNER !!! 👏")

    // On supprime l'interval de temps
    clearInterval(timeLeftInterval);

    // On désactive le champs et le bouton
    $('#guessInput').prop('disabled', true);
    $('#submitBtn').prop('disabled', true);

    // On enlève les indices et autres textes qui ne sont plus utiles
    $('#nok').hide();
    $('#info').hide();
    $('#more').hide();
    $('#less').hide();
    $('#guessInputLabel').hide();

    // On met le temps restant en gris
    $('#timeLeftValue').css('color', 'grey');

    // On affiche le message gagnant
    $('#ok').show();
    
    // On affiche le nombre mystère
    $('#resText').show();

    // On désactive le bouton abandon
    $('#stopBtn').prop('disabled', true);
    $('#stopBtn').hide();
}

/**
 * Réglages d'affichages et fin du jeu quand la partie est perdue
 */
function gameOver() {

    console.log("👾 GAME OVER BRO 👾");

    // On supprime l'interval de temps
    clearInterval(timeLeftInterval);
    // On met le temps restant à 0
    timeLeft = 0;
    setTimeLeftOnPage();

    // On change quelques propriétés CSS
    // le temps restant rouge
    // éléments de saisie grisés
    $('#timeLeftValue').css('color', 'red');
    $('#guessInput').css('background-color', 'grey');
    $('#submitBtn').css('background-color', 'grey');

    // On désactive la saisie
    $('#guessInput').prop('disabled', true);
    $('#submitBtn').prop('disabled', true);
    $('#stopBtn').prop('disabled', true);

    // On montre le message d'échec
    $('#nok').show();

    // On enlève les indices et autres éléments qui ne sont plus utiles
    $('#info').hide();
    $('#guessInputLabel').hide();
    $('#more').hide();
    $('#less').hide();
    $('#stopBtn').hide();
}

/**
 * Ecoulement du temps restant
 */
function decreaseTimeLeft() {
    // on enlève 1 seconde
    timeLeft--;
    // Vérifications
    if (timeLeft >= 0) {
        // Le temps restant est encore positif
        if (timeLeft < 20) {
            // il ne reste plus beaucoup de temps
            console.log("🚑 Not so much time 🚑")
            $('#timeLeftValue').css('color', 'red');
        }
        // Mise à jour du temps restant sur la vue html
        setTimeLeftOnPage();
    }
    else {
        // plus de temps
        gameOver();
    }
}

// Code executé au chargement de la page
console.log("🚀 Ready to play 🚀");
// Initialisations
var timeLeft = 60;
var mystery = Math.floor(Math.random() * 100);
$('#resText').html(mystery);
// On lance un timer qui va lancer 
// la fonction decreaseTimeLeft 
// toutes les secondes
var timeLeftInterval = setInterval(decreaseTimeLeft, 1000);
