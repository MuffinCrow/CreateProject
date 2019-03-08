var deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deckNum = -1;
var hand = [];
var handNum = [];
var dealer = [];
var dealerNum = [];
var turn = 0;
var gameOver = 0;
var handSum = 0;
var dealerSum = 0;
//turn = 1; your turn
//turn = 2; dealer turn
//deckNum = _; the place value in the deck we are dealing from
//gameOver = 1; you lost
//gameOver = 2; you won

console.log(deck);

function reset() {
  deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  deckNum = -1;
  hand = [];
  handNum = [];
  dealer = [];
  dealerNum = [];
  turn = 0;
  gameOver = 0;
  handSum = 0;
  dealerSum = 0;
}

function shuffle() {
  reset();
  console.log("hand1:", hand);
  for (z = 0; z < 7; z++) {
    var m = deck.length, t, i;
    //while there remain elements to shuffle...
    while (m) {
      //Pick a remaining element...
      i = Math.floor(Math.random() * m--);
      //And swap it with the current element.
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
  }
  console.log(deck);
  console.log("hand:", hand);
  deal(1);
  deal(2);
  deal(1);
  deal(2);
  turn = 1;
  convert();
  console.log(hand);
  console.log(dealer);
}

function deal(crd) {
  turn = crd;
  deckNum++;
  if (turn == 1) {
    hand.push(deck[deckNum]);
  } else if (turn == 2) {
    dealer.push(deck[deckNum]);
  } else {
    console.log("Error: Turn is not equal to 1 or 2");
  }
  turn = 0;
}

function hit() {
  deal(1);
  endGame();
}

function endGame() {

}

function convert() {

//turning hand into handNum
  console.log(hand);
  handNum = hand.toString().replace(/Q/g, "10").replace(/J/g, "10").replace(/K/g, "10").replace(/A/g, "11");
  handNum = handNum.replace(/ /g, "");
  handNum = handNum.replace(/,/g, "+");
  handSum = eval(handNum);
  if (handSum > 21) {
    handNum = handNum.replace("11", "1");
    handSum = eval(handNum);
  }
  console.log(handNum);
  console.log(handSum);
}
