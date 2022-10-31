// Assignment code here

//  function generatePassword
function generatePassword() {
  // declare variable for store alpha , number, special charactor to generate password
  var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spacialChar = "@#$%^&*()<>";
  var number = "0123456789";

  // vaiable for store password
  var passwordString = "";

  var passwordLength = prompt("How many length do you want?");

  // if (passwordLength === "" || passwordLength === "null") {
  //   return;
  // } else if (!Number.isInteger(parseInt(passwordLength))) {
  //   // while (!Number.isInteger(parseInt(passwordLength))) {
  //   alert(passwordLength + " is not a Integer, Please try again!");
  //   passwordLength = prompt("Please input number. How long do you want?");

  //   if (passwordLength === "" || passwordLength === "null") {
  //     return;
  //   } else {
  //     while (!Number.isInteger(parseInt(passwordLength))) {
  //       alert(passwordLength + " is not a Integer, Please try again!");
  //       passwordLength = prompt("Please input number. How long do you want?");
  //       // if (!(passwordLength <= 128 && passwordLength >= 8)) {
  //       //   passwordLength = prompt("Your password should be 8 to 128 lenth.");
  //       // }
  //       if (passwordLength === "") return;
  //     }
  //     // else if (!(passwordLength <= 123 && passwordLength >= 8)) {
  //     //   passwordLength = prompt("Your password should be 8 to 123 length.");
  //     // } else {
  //     //   for (var i = 0; i < passwordLength; i++) {
  //     //     var randomNumber = Math.floor(Math.random() * lowerAlpha.length);
  //     //     passwordString += lowerAlpha.substring(
  //     //       randomNumber,
  //     //       randomNumber + 1
  //     //     );
  //     //   }
  //     //   return passwordString;
  //     // }
  //   }
  // }

  // check length of password between 8 to 128
  while (!(passwordLength <= 128 && passwordLength >= 8)) {
    alert("Password should be between 8 to 128 length.");
    passwordLength = prompt(
      "Plese input your password between 8 to 123 length."
    );
  }

  // ask user, they want to add condition
  var addCondition = confirm(
    "Do you want to add Lowercase, Uppercase, Special Charactor or Number?"
  );
  var addLower;
  var addUpper;
  var addSpecail;
  var addNumber;
  if (addCondition) {
    addLower = confirm("Do you want to add Lowercase letter");
    addUpper = confirm("Do you want to add Uppercase letter?");
    addNumber = confirm("Do you want to add Number?");
    addSpecail = confirm("Do you want to add Special Charactor?");
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

  // let regex =  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;

  //  condition to check password need to contain at least what ever user select
  var regex;
  if (addLower) {
    regex = /^(?=.*[a-z]).{8,128}$/;
  } else if (addLower && addUpper) {
    regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
  } else if (addLower && addUpper && addNumber) {
    regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,128}$/;
  } else if (addLower && addUpper && addSpecail) {
    regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addLower && addUpper && addNumber && addSpecail) {
    regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addLower && addNumber) {
    regex = /^(?=.*[a-z])(?=.*[0-9]).{8,128}$/;
  } else if (addLower && addNumber && addSpecail) {
    regex =
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addLower && addSpecail) {
    regex =
      /^(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addUpper) {
    regex = /^(?=.*[A-Z]).{8,128}$/;
  } else if (addUpper && addNumber) {
    regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,128}$/;
  } else if (addUpper && addSpecail) {
    regex =
      /^(?=.*[A-Z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addUpper && addNumber && addSpecail) {
    regex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (number) {
    regex = /^(?=.*[0-9]).{8,128}$/;
  } else if (number && addSpecail) {
    regex =
      /^(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  } else if (addSpecail) {
    regex = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,128}$/;
  }

  console.log(passwordString);

  console.log(passwordString.length);

  var getPassword = "";
  var randomNumber;

  // loop until get password criteria is true
  do
    for (var i = 0; i < passwordLength; i++) {
      randomNumber = Math.floor(Math.random() * passwordString.length);
      // getPassword += passwordString.substring(randomNumber, randomNumber + 1);
      getPassword += passwordString.charAt(randomNumber);
    }
  while (!regex.test(getPassword));
  return getPassword;
  // return s;
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
