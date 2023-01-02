////////////////////////////////////////////////////////////
// Constants

const N = "N";
const BEG = "BEG";
const BEG_INT = "BEG_INT";
const MID_INT = "MID_INT";
const END_INT = "END_INT";
const END = "END";

// WORD-LEVEL FUNCTIONS ////////////////////////////////////
// These shouldn't have to worry about case or punctuation

function injectTypoIntoWord(typoType, word) {
  if (typoType === BEG) {
    return typoBeg(word);
  } else if (typoType === BEG_INT) {
    return typoBegInt(word);
  } else if (typoType === MID_INT) {
    return typoMidInt(word);
  } else if (typoType === END_INT) {
    return typoEndInt(word);
  } else if (typoType === END) {
    return typoEnd(word);
  } else {
    throw `The typoType "${typoType}" has a typo!`;
  }
}

function typoBeg(word) {
  // TODO
  if (word.length > 4) {
    let newWordArr = word.split("");
    newWordArr[0] = word[1];
    newWordArr[1] = word[0];
    word = newWordArr.join("");
  }
  return word;
}

function typoBegInt(word) {
  // TODO
  if (word.length > 4) {
    let newWordArr = word.split("");
    newWordArr[2] = word[1];
    newWordArr[1] = word[2];
    word = newWordArr.join("");
  }
  return word;
}

function typoMidInt(word) {
  // TODO
  if (word.length > 4) {
    let newWordArr = word.split("");
    let startPoint = Math.floor(word.length / 2) - 1;
    newWordArr[startPoint + 1] = word[startPoint];
    newWordArr[startPoint] = word[startPoint + 1];
    word = newWordArr.join("");
  }
  return word;
}

function typoEndInt(word) {
  // TODO
  if (word.length > 4) {
    let newWordArr = word.split("");
    newWordArr[word.length - 3] = word[word.length - 2];
    newWordArr[word.length - 2] = word[word.length - 3];
    word = newWordArr.join("");
  }
  return word;
}

function typoEnd(word) {
  // TODO
  if (word.length > 4) {
    let newWordArr = word.split("");
    newWordArr[word.length - 2] = word[word.length - 1];
    newWordArr[word.length - 1] = word[word.length - 2];
    word = newWordArr.join("");
  }
  return word;
}

// SENTENCE-LEVEL FUNCTIONS ////////////////////////////////

function injectTyposIntoSentence(typoType, sentence) {
  const words = sentence.split(" ");
  let newWords = [];
  for (const word of words) {
    if (word.length > 4) {
      if (
        word.length === 5 &&
        (word[word.length - 1] === "." || word[word.length - 1] === ",")
      ) {
        newWords.push(word);
      } else {
        newWords.push(injectTypoIntoWord(typoType, word));
      }
    } else {
      newWords.push(word);
    }
  }
  const newSentence = newWords.join(" ");
  return newSentence;
}
