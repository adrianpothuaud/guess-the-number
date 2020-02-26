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
}

/**
 * Réglages d'affichages et fin du jeu quand la partie est perdue
 */
function gameOver() {

    clearInterval(timeLeftInterval);
    timeLeft = 0;
    setTimeLeftOnPage();

    console.log("👾 GAME OVER BRO 👾");

    $('#timeLeftValue').css('color', 'red');
    $('#guessInput').prop('disabled', true);
    $('#guessInput').css('background-color', 'grey');
    $('#submitBtn').prop('disabled', true);
    $('#submitBtn').css('background-color', 'grey');
    $('#nok').show();
    $('#info').hide();
    $('#guessInputLabel').hide();
    $('#more').hide();
    $('#less').hide();
}

function decreaseTimeLeft() {
    timeLeft--;
    if (timeLeft >= 0) {
        if (timeLeft < 20) {
            console.log("🚑 Not so much time 🚑")
            $('#timeLeftValue').css('color', 'red');
        }
        setTimeLeftOnPage();
    }
    else {
        gameOver();
    }
}

console.log("🚀 Ready to play 🚀");
var timeLeft = 60;
var mystery = Math.floor(Math.random() * 100);
$('#resText').html(mystery);
var timeLeftInterval = setInterval(decreaseTimeLeft, 1000);
