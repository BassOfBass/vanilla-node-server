const fs = require('fs');

function readFile() {
  let data = fs.readFileSync('sentences.txt');
  let sentences = data.toString();

  return sentences;
};

/**
 * 
 * @param {string} text 
 */
function getWords(text) {
  let allSentences = text.split('\n');
  let flatSentence = allSentences.join(' ');
  let words = flatSentence.split(' ');
  words = words.map((word) => word.trim().toLowerCase());

  return words;
};

/**
 * 
 * @param {string[]} words 
 */
function countWords(words) {
  let map = {};
  words.forEach(word => {
    if (!(word in map)) {
      map[word] = 1;
    } else {
      map[word] += 1;
    }
  });

  return map;
};

module.exports = { readFile, getWords, countWords };