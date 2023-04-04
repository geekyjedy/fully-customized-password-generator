const resultEl = document.getElementById("result");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const cb = navigator.clipboard;
  const paragraph = document.querySelector('#result');
  cb.writeText(paragraph.innerText).then(() => alert('Text copied'));
});

generateEl.addEventListener("click", () => {
  generatePassword();
});

function generatePassword(lower, upper, number, symbol) {
  let pass = "";
  const lengthEl = document.querySelector("#length");
  const res = document.querySelector("#result");
  const upr = document.querySelector("#uppercase").checked;
  const lwr = document.querySelector("#lowercase").checked;
  const num = document.querySelector("#numbers").checked;
  const syb = document.querySelector("#symbols").checked;

  upper = ""
  lower = ""
  number = ""
  symbol = ""

  while (lengthEl.value > pass.length) {
    if(upr){
      upper = getRandomUpper();
    }
    if(lwr){
      lower = getRandomLower();
    }
    if(num){
      number = getRandomNumber();
    }
    if(syb){
      symbol = getRandomSymbol();
    }
    
    // pass += upper + lower + number + symbol;

    pass += upper;
    if (lengthEl.value == pass.length) {
      res.innerHTML = pass;
    }
    pass += lower;
    if (lengthEl.value == pass.length) {
      res.innerHTML = pass;
    }
    pass += number;
    if (lengthEl.value == pass.length) {
      res.innerHTML = pass;
    }
    pass += symbol;
    if (lengthEl.value == pass.length) {
      res.innerHTML = pass;
    }
  }
  return res;
}

  //generating lowercase letter

  function getRandomLower() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomCharacter;
  }

  //generating uppercase letter

  function getRandomUpper() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomCharacter;
  }

  //generating number

  function getRandomNumber() {
    const num = Math.floor(Math.random() * 10);

    return num;
  }

  //generating symbol

  function getRandomSymbol() {
    const symb = "!@#$%^&><*()_+?~\\`|}{[]:;,./-=";

    const specialChar = symb[Math.floor(Math.random() * symb.length)];
    return specialChar;
  }
