function setTimeLeftOnPage() {

    $('#timeLeftValue').html(timeLeft);
}

function evaluateResponse() {

    console.log("👀 Évaluation de la réponse 👀");

    const response = $('#guessInput').val();

    console.log("👉 Réponse : " + response);

    if(response < mystery) {
        itsMore();
    } else if (response > mystery) {
        itsLess();
    } else {
        youWin();
    }
}

function itsMore() {

    console.log("👍 Give me more 👍")

    $('#less').hide();
    $('#more').show();
}

function itsLess() {

    console.log("👎 Not so much 👎")

    $('#more').hide();
    $('#less').show();
}

function youWin() {

    clearInterval(timeLeftInterval);

    console.log("👏 We have a WINNER !!! 👏")

    $('#timeLeftValue').css('color', 'grey');
    $('#guessInput').prop('disabled', true);
    $('#submitBtn').prop('disabled', true);
    $('#nok').hide();
    $('#info').hide();
    $('#guessInputLabel').hide();
    $('#ok').show();
    $('#more').hide();
    $('#less').hide();
    $('#resText').show();
}

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
