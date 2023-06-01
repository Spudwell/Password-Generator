// Assignment code here
var lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%&()~}{][@?=/";
var numbers = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var finalCharString = "";

  var userLength = prompt(
    "How long would you like your password? Choose a length between 8-128"
  );

  userLength = parseInt(userLength, 10);

  if (userLength < 8 || userLength > 128 || !userLength) {
    return alert("Please type in a number between 8 and 128");
  }

  var addLowercase = confirm("Include Lowercase Variables?");
  var addUppercase = confirm("Include Uppercase Characters?");
  var specChars = confirm("Include Special Characters?");
  var addNumbers = confirm("Include Numbers?");

  console.log(userLength, addLowercase, addUppercase, specChars, addNumbers);

  if (addLowercase === true) {
    finalCharString += lowAlphabet;
  }

  if (addUppercase === true) {
    finalCharString += upAlphabet;
  }

  if (specChars === true) {
    finalCharString += specialChars;
  }

  if (addNumbers === true) {
    finalCharString += numbers;
  }

  if (finalCharString === "") {
    return alert("Please choose at least one caracter type");
  }

  // initialise the index as 0
  // check if it is lower than the given value (index < userLength)
  // if it is, execute the code in the codeblock, increase the index by one and start over
  for (let index = 0; index < userLength; index++) {
    // concatinate onto the password var, a random number for as many times as the user chose the length of the pw
    var randomIndex = Math.floor(Math.random() * finalCharString.length);
    password += finalCharString[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
