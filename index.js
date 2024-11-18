const inputWord = document.querySelector(".input-word");
const countBtn = document.querySelector(".count-btn");
const resetBtn = document.querySelector(".reset-btn");
const vowelBox = document.querySelector(".vowel");
const consonantBox = document.querySelector(".consonant");

let vowelsCount = 0;
let consonantCount = 0;

let myWord = "";
const isAlpha = (str) => {
  return /^[a-zA-Z]*$/.test(str);
};

resetBtn.disabled = false;
resetBtn.classList.add("disabled");

countBtn.addEventListener("click", () => {
  myWord = inputWord.value.toLowerCase();
  console.log(myWord);
  if (!isAlpha(myWord) || !myWord) {
    alert("Please enter only valid characters!");
    return;
  }
  const myWordArray = myWord.split("");
  for (let i = 0; i < myWordArray.length; i++) {
    if (vowels.includes(myWordArray[i])) {
      vowelsCount++;
    } else {
      consonantCount++;
    }
  }
  resetBtn.classList.remove("disabled");
  countBtn.classList.add("disabled");
  resetBtn.disabled = false;
  countBtn.disabled = true;
  vowelBox.classList.remove("visibility");
  consonantBox.classList.remove("visibility");
  vowelBox.innerHTML = `Number of vowels: <span style="color: white;"> ${vowelsCount}</span>`;
  consonantBox.innerHTML = `Number of consonants: <span style="color: white;"> ${consonantCount}</span>`;
});

resetBtn.addEventListener("click", () => {
  vowelsCount = 0;
  consonantCount = 0;
  inputWord.value = "";
  resetBtn.disabled = true;
  countBtn.disabled = false;
  resetBtn.classList.add("disabled");
  countBtn.classList.remove("disabled");
  vowelBox.classList.add("visibility");
  consonantBox.classList.add("visibility");
});
