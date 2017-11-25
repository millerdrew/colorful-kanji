var joyoKanji = require('sorted-joyo-kanji');
var colors = require('colors');

var kanji = joyoKanji.kanji;

function listKanji(number) {
    return kanji.slice(number - 100, number);
}

function printKanji() {
  for (var i = 1; i < 23; i++) {
    if (i % 2) {
          console.log(`Kanji group ${i}: ${listKanji(i * 100)}`.red);
        }
    else {
          console.log(`Kanji group ${i}: ${listKanji(i * 100)}`.blue);
        }
  }
}
