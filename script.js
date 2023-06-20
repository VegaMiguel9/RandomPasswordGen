var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//  Button event listener
generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function generatePassword() {
    var length = parseInt(prompt("Enter the desired length of the password:"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return "";
    }
  
    var includeLowercase = document.getElementById('include-lowercase').checked;
    var includeUppercase = document.getElementById('include-uppercase').checked;
    var includeNumbers = document.getElementById('include-numbers').checked;
    var includeSpecial = document.getElementById('include-special').checked;
  
    var characters = '';
    if (includeLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSpecial) {
      characters += '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
    }
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
