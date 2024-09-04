const inputWord = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset");

function myFunction() {
/*
1. Get value of the input field,
2.Remove all non-alphanumeric characters (punctuation, spaces and symbols)*/
const modifiedString = inputWord.value.replace(/[^a-zA-Z0-9]/g, "");

/*Turning input value into all caps for comparison */
const stringInitial = modifiedString.toUpperCase();

/*Reverse the resultant string*/
const stringReverse = modifiedString.split("").reverse().join("").toUpperCase();

  if (inputWord.value === ""){
alert("Please input a value");
  } else {
    /*Compare the two strings*/
if (stringInitial === stringReverse) {
resultDiv.className = "";
resultDiv.classList.add("result-positive");
resultDiv.innerText = `${inputWord.value} is a palindrome!`;
resetButton.classList.remove("hidden");
resetButton.classList.add("reset-button");
checkButton.classList.remove("btn-palindrome-check");
checkButton.classList.add("hidden");
} else if (stringInitial === "")
{
  resultDiv.classList.add("hidden");
} else {
  resultDiv.className = "";
  resultDiv.classList.add("result-negative");
  resultDiv.innerText = `${inputWord.value} is not a palindrome!`;
  resetButton.classList.remove("hidden");
  resetButton.classList.add("reset-button");
  checkButton.classList.remove("btn-palindrome-check");
  checkButton.classList.add("hidden");
};
  }
}

function myReset(){
  inputWord.value = "";
  resultDiv.classList.add("hidden");
  checkButton.classList.remove("hidden");
  checkButton.classList.add("btn-palindrome-check");
  resetButton.classList.add("hidden");
}
