"use strict";

let numCardsPulled = 0;

let player = {
    cards: [],
    score: 0,
    money: 100
};

let dealer = {
    cards: [],
    score: 0
};

document.getElementById("player-money").innerHTML = "Your Money: $" + player.money;
document.getElementById("hit-button").disabled = true;
document.getElementById("stand-button").disabled = true;

function getCardValue(a) {
    let cardArray = [];
    let total = 0;
    let i = 0,
        aceCount = 0;
    cardArray = a;
    for (i; i<cardArray.length;i+=1){
        if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K"){
            total += 10;
        } else if (cardArray[i].rank === "A") {
            total += 11;
            aceCount += 1;
        } else {
            total += cardArray[i].rank;
        }
    }
    while (aceCount > 0 && total > 21){
        total -= 10;
        aceCount -= 1;
    }
    return total
}

let deck = {
    deckArray: [],
    initialize: function () {
        let suitArray, rankArray, s, r;
        suitArray = ["clubs", "diamonds", "hearts", "spades"];
        rankArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        for (s = 0; s < suitArray.length; s += 1) {
            for (r = 0; r < suitArray.length; r += 1) {
                this.deckArray[s * 13 + r] = {
                    rank: rankArray[r],
                    suit: suitArray[s]
                };
            }
        }
    },
    shuffle: function () {
        let temp, i, rnd;
        for (i = 0; i < this.deckArray.length; i += 1) {
            rnd = Math.floor(Math.random() * this.deckArray.length);
            temp = this.deckArray[i];
            this.deckArray[i] = this.deckArray[rnd];
            this.deckArray[rnd] = temp;
        }
    }
};
deck.initialize();
deck.shuffle();

function bet(outcome) {
    let playerBet = document.getElementById("bet").valueAsNumber;
    if (outcome === "win") {
        player.money += playerBet;
    }
    if (outcome === "lose") {
        player.money -= playerBet;
    }
}
function () {

}