// Assignment code here

//  function generatePassword
function generatePassword() {
  // declare variable for store alpha , number, special charactor to generate password
  var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spacialChar = "@#$%^&*()";
  var number = "0123456789";

  // variable for store all charactor for random
  var passwordString = "";

  // variable for store password after radndom
  var getPassword = "";

  // variable for store index
  var randomNumber;

  var addLower;
  var addUpper;
  var addSpecail;
  var addNumber;

  // ask user, they want to add condition
  var addCondition = confirm(
    "You can choose criteria of password:\n- Lowercase\n- Uppercase \n- Number \n- Special Charactor \n- Length between 8 to 128"
  );

  if (addCondition) {
    addLower = confirm("Do you want to add Lowercase letter");
    addUpper = confirm("Do you want to add Uppercase letter?");
    addNumber = confirm("Do you want to add Number?");
    addSpecail = confirm("Do you want to add Special Charactor?");
    while (
      addLower === false &&
      addUpper === false &&
      addNumber === false &&
      addSpecail === false
    ) {
      alert("You must choose one at least.");
      addLower = confirm("Do you want to add Lowercase letter");
      addUpper = confirm("Do you want to add Uppercase letter?");
      addNumber = confirm("Do you want to add Number?");
      addSpecail = confirm("Do you want to add Special Charactor?");
    }
    if (addLower) {
      passwordString += lowerAlpha;
    }
    if (addUpper) {
      passwordString += upperAlpha;
    }
    if (addNumber) {
      passwordString += number;
    }
    if (addSpecail) {
      passwordString += spacialChar;
    }
  } else {
    return;
  }

  console.log(passwordString);

  // ask length from user
  var passwordLength = prompt(
    "How many length do you want for your password?\nPlease choose from 8 to 128 length."
  );

  // check length of password between 8 to 128
  while (!(passwordLength <= 128 && passwordLength >= 8)) {
    alert("Password should be between 8 to 128 length.");
    passwordLength = prompt(
      "Plese input your password between 8 to 123 length."
    );
  }

  // condition to check password need to contain at least one what ever user select
  // var regex;
  // if (addLower) {
  //   regex = /^(?=.*[a-z]).{8,128}$/;
  // } else if (addLower && addUpper) {
  //   regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
  // } else if (addLower && addUpper && addNumber) {
  //   regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,128}$/;
  // } else if (addLower && addUpper && addSpecail) {
  //   regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addLower && addUpper && addNumber && addSpecail) {
  //   regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addLower && addNumber) {
  //   regex = /^(?=.*[a-z])(?=.*[0-9]).{8,128}$/;
  // } else if (addLower && addNumber && addSpecail) {
  //   regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addLower && addSpecail) {
  //   regex = /^(?=.*[a-z])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addUpper) {
  //   regex = /^(?=.*[A-Z]).{8,128}$/;
  // } else if (addUpper && addNumber) {
  //   regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,128}$/;
  // } else if (addUpper && addSpecail) {
  //   regex = /^(?=.*[A-Z])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addUpper && addNumber && addSpecail) {
  //   regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (number) {
  //   regex = /^(?=.*[0-9]).{8,128}$/;
  // } else if (number && addSpecail) {
  //   regex = /^(?=.*[0-9])(?=.*[@#$%^&*()]).{8,128}$/;
  // } else if (addSpecail) {
  //   regex = /^(?=.*[@#$%^&*()]).{8,128}$/;
  // }

  // loop until get password criteria is true
  // do
  for (var i = 0; i < passwordLength; i++) {
    randomNumber = Math.floor(Math.random() * passwordString.length);
    // getPassword += passwordString.substring(randomNumber, randomNumber + 1);
    getPassword += passwordString.charAt(randomNumber);
  }
  // while (!regex.test(getPassword));
  return getPassword;
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
