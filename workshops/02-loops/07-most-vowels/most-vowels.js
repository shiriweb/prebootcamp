// YOUR CODE BELOW
function mostVowels(string) {
  let currentWord = "";
  let maxWord = "";
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    let value = string[i];

    if (value !== " " && i !== string.length - 1) {
      currentWord += value;

      if (vowelCheck(value)) {
        currentCount += 1;
      }
    } else {
      if (currentCount > maxCount) {
        maxWord = currentWord;
        maxCount = currentCount;
      }
      currentWord = "";
      currentCount = 0;
    }
  }
  return maxWord;
}

function vowelCheck(value) {
  value = value.toLowerCase();
  let vowels = "aeiou";
  if (vowels.indexOf(value) >= 0) {
    return true;
  } else {
    return false;
  }
}

let result = mostVowels("I am a keeper with some real rhythms");
console.log(result);
