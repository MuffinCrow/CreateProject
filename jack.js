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
var standTrue = 0;
var tie = 0;
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
  standTrue = 0;
  var tie = 0;
  for (var i = 0; i < 10; i++) {
    var c = document.getElementById(i + 1);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 158, 246);
  }
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
    var c = document.getElementById(hand.length + 6);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 158, 246);
    var temp = deck[deckNum];
    hand.push(deck[deckNum]);
    ctx.textAlign = "center";
    ctx.textAlign = "middle";
    ctx.font = "120px Arial";
    ctx.strokeText(temp, 70, 170);
  } else if (turn == 2) {
    var c = document.getElementById(dealer.length + 1);
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 158, 246)
    var temp = deck[deckNum];
    dealer.push(deck[deckNum]);
    if (dealer.length > 1 && standTrue == 0) {
      var img = src="Images/cardBack.jpg";
      ctx.fillStyle = "#0280fd";
      ctx.fillRect(0, 0, 158, 246);
    } else {
      ctx.textAlign = "center";
      ctx.textAlign = "middle";
      ctx.font = "120px Arial";
      ctx.strokeText(temp, 70, 170);
    }
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
    }
    if (handSum == 21) {
      //WE NEED TP ADD THE SPOT WHERE YOU WIN OR YOU LOSE GOES
      reveal();
      gameOver = 2;
      alert("YOU WIN \nYour hand total: " + handSum + "\nDealer's hand total: " + dealerSum);
    }
    if (handSum > 21) {
      gameOver = 1;
      reveal();
      alert("YOU LOSE\nYour hand total: " + handSum + "\nDealer's hand total: " + dealerSum);
    } else if (handSum < 21) {
      gameOver = 0;
    }
    } else if (turn == 2) {
    if (dealerSum > 21) {
      convert();
    } else if (dealerSum > 21) {
      convert();
    }
    if (dealerSum < handSum) {
      gameOver = 2;
      alert("YOU WIN\nYour hand total: " + handSum + "\nDealer's hand total: " + dealerSum);
    } else if (dealerSum > handSum) {
      gameOver = 1;
      alert("YOU LOSE\nYour hand total: " + handSum + "\nDealer's hand total: " + dealerSum);
    } else if (dealerSum == handSum) {
      gameOver = 3;
      alert("YOU TIED\nYour hand total: " + handSum + "\nDealer's hand total: " + dealerSum);
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
    standTrue = 1;
    tie = 1;
    while (dealerSum < 17) {
      tie = 0;
      deal(2);
      endGame();
    }
    if (tie == 1) {
      endGame();
    }
    var c = document.getElementById("2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 158, 246);
    var temp = deck[3];
    ctx.textAlign = "center";
    ctx.textAlign = "middle";
    ctx.font = "120px Arial";
    ctx.strokeText(temp, 70, 170);
    console.log(dealer);
  }
}

function reveal() {
  var c = document.getElementById("2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 158, 246);
    var temp = deck[3];
    ctx.textAlign = "center";
    ctx.textAlign = "middle";
    ctx.font = "120px Arial";
    ctx.strokeText(temp, 70, 170);
    console.log(dealer);
}
