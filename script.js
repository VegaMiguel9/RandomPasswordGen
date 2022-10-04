// Array of special characters
var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  "'",
  '-',
  '_',
  '+',
  '=',
  ';',
  ':',
  ',',
  '.',
  '/',
  '|',
  '\\',
];

// Array of Numeric characters
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

//Array of lowercase
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

//Array of uppercase
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many Characters would you like your password to contain?'),
    10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must be at no more than 128 characters');
    return null;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  var hasLowercaseCharacters = confirm(
    'click OK to confirm including Lowercase characters'
  );
  var hasUppercaseCharacters = confirm(
    'click OK to confirm Lowercase characters'
  );
  var hasNumericCharacters = confirm(
    'click OK to confirm Uppercase characters'
  );


  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters, 
  };
  return passwordOptions;
}


function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];

  if (options.hasLowercaseCharacters) {
    possibleChars = possibleChars.concat(lowerCase)
    guaranteedChars.push(getRandom(lowerCase))
  }
  if (options.hasNumericCharacters) {
    possibleChars = possibleChars.concat(numericCharacters)
    guaranteedChars.push(getRandom(numericCharacters))
  }
  if (options.hasSpecialCharacters) {
    possibleChars = possibleChar .concat(specialCharacters)
    guaranteedChars.push(getRandom(specialCharacters))
  }
  if (options.hasUppercaseCharacters) {
    possibleChars = possibleChars.concat(upperCase)
    guaranteedChars.push(getRandom(upperCase))
  }

  console.log("possibleCharacters", possibleChars);
  for (var i = 0; i < options.length; i++) {
    var possibleChars = getRandom(possibleChars);
    result.push(possibleChars);
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }
  return result.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
