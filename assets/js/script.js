// Assignment code here

//  function generatePassword
function generatePassword() {
  // declare variable for store alpha , number, special charactor to generate password
  var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spacialChar = "!@#$%^&*";
  var number = "0123456789";

  // vaiable for store password
  var passwordString = "";

  var passwordLength = prompt("How many length do you want?");

  var addCondition = confirm(
    "Do you want to add Uppercase, Special Charactor or Number?"
  );
  if (addCondition) {
    // ask user, they want to add condition
    var addUpper = confirm("Do you want to add Uppercase letter?");
    var addSpecail = confirm("Do you want to add Special Charactor?");
    var addNumber = confirm("Do you want to add Number?");

    if (addUpper) {
      lowerAlpha += upperAlpha;
    }
    if (addSpecail) {
      lowerAlpha += spacialChar;
    }
    if (addNumber) {
      lowerAlpha += number;
    }
  } else {
    return;
  }

  console.log(lowerAlpha);

  console.log(lowerAlpha.length);
  // if (passwordLength == null) {
  //   return;
  // }

  // while (!Number.isInteger(parseInt(passwordLength))) {
  //   alert(passwordLength + " is not a Integer, Please try again!");
  //   passwordLength = prompt(
  //     "Your password should 8 to 123 length. How long do you want?"
  //   );
  // }

  // while (!(passwordLength <= 123 && passwordLength >= 8)) {
  //   passwordLength = prompt("Your password should 8 to 123 length.");
  // }

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * lowerAlpha.length);
    passwordString += lowerAlpha.substring(randomNumber, randomNumber + 1);
  }
  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
