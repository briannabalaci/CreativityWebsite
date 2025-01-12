// JavaScript to trigger the flip effect on mouse hover
function flipCard(card) {
    card.querySelector('.card-front').style.transform = "rotateY(180deg)";
    card.querySelector('.card-back').style.transform = "rotateY(0deg)";
}

function unflipCard(card) {
    card.querySelector('.card-front').style.transform = "rotateY(0deg)";
    card.querySelector('.card-back').style.transform = "rotateY(180deg)";
}
