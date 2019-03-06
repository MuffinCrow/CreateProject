var deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deckNum = -1;
var hand = [];
var dealer = [];
console.log(deck);

function shuffle() {
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
  deal();
}

function deal() {

}
