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
  console.log(gameOver);
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
  endGame();
  console.log(hand);
  console.log(dealer);
  console.log(handSum);
  console.log(dealerSum);
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
}

function hit() {
  if (gameOver == 0) {
    deal(1);
    endGame();
    console.log("HIT COMPLETE");
    turn = 0;
  }
  console.log(hand);
  console.log(dealer);
  console.log(handSum);
  console.log(dealerSum);
}

function endGame() {
convert();
console.log(handSum + " is the handSum");
  if (turn == 1) {
    console.log("MY TURN");
    if (handSum > 21) {
      convert();
      console.log("I am changed");
    }
    if (handSum == 21) {
      //WE NEED TP ADD THE SPOT WHERE YOU WIN OR YOU LOSE GOES
      gameOver = 2;
      console.log("I am winner");
    }
    if (handSum > 21) {
      gameOver = 1;
      console.log("I am greater");
    } else if (handSum < 21) {
      gameOver = 0;
      console.log("I am less");
    }
    } else if (turn == 2) {
    if (dealerSum > 21) {
      convert();
    } else if (dealerSum > 21) {
      convert();
    }
    if (dealerSum < handSum) {
      gameOver = 2;
    } else if (dealerSum >= handSum) {
      gameOver = 1;
    }
  }
  console.log(gameOver);
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

  dealerNum = dealer.toString().replace(/Q/g, "10").replace(/J/g, "10").replace(/K/g, "10").replace(/A/g, "11");
  dealerNum = dealerNum.replace(/ /g, "");
  dealerNum = dealerNum.replace(/,/g, "+");
  dealerSum = eval(dealerNum);
  if (dealerSum > 21) {
    dealerNum = dealerNum.replace("11", "1");
    dealerSum = eval(dealerNum);
  }
  console.log(dealerNum);
  console.log(dealerSum);
}

function stand() {

  if (gameOver == 0) {
    turn = 2;
    while (dealerSum < 17) {
      deal(2);
      endGame();
    }
    console.log(dealer);
  }
//  if (dealerSum <= 17) {
//    deal(1);
//  }
//  if (dealerSum == 21) {
//    gameOver = 2;
//  }
//  console.log(stand);
}
