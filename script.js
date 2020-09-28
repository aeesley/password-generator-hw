

// PSEUDO CODE //
// 1. User clicks 'Generate Password button which starts a series of prompt questions from computer to user. MAKE FOR LOOP

// 2. User answers series of questions entering criteria into database.

    // PASSWORD GENERATOR QUESTIONS & CORRESPONDING CRITERIA 
      // How many characters would you like your password to be?

          // If characters count between 8 and 128, then user input is TRUE

          // Else character count is [input < 8, OR input > 128] then input is FALSE & user gets an alert ("You must select a character count between 8 and 128")

      // What character types would you like included in your password (select from: lowercase, uppercase, numberic, and/or special characters)?

          // If user inputs one or more of the following (lowercase, uppercase, numeric, and/or special characters) then the input is TRUE

            // 4 separate confirm (asking for each character type)

            // IF - at least one was selected (grouping, have to list out all options/combinations OR [save all of these answers into an object]. Reference RPS activity again.
            
            // ELSE - none were selected

          // Else the user selects any input that does match AT LEAST one of the following (lowercase, uppercase, numeric, and/or special characters), then the input is FALSE and user will get a prompt (The character type you selected is not valid. Please pick again from the following options: lowercase, uppercase, numeric, and/or special characters.) Alert - You do not get a password. Please refresh the browser to try again.

// 3. When both answers have been correctly inputed/validated then the computer should generate a random password that meets all inputed critera definitions. Password can either be displayed in an alert or written to the page.

// START OF MY JAVASCRIPT CODE

// arrays for password info //
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialchars = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"];

// Blank array to store user selections so that computer can pull random characters from here to generate password based on user selections

// map for user answers to store back into these variable answers //
var userAnswers = {
  length: wantsLength,
  lowercase: wantsLowerCase,
  uppercase: wantsUpperCase,
  numeric: wantsNumeric,
  specialchars: wantsSpecialChars,
  userchoices: userSelections

}

// asking user to enter how many characters they want for length // 
var wantsLength = prompt("How many characters would you like included in your password? Please enter a character count between 8 and 128."); 
console.log("Length chosen = " + wantsLength);

  // confirming that users has selected a valid number of characters
  if (wantsLength === 8 < wantsLength < 128){
    alert("Your password will contain " + wantsLength + " characters!");
    reWriteStats();
  }
  //if user does not select the right character count they get this message 
  else (wantsLength === wantsLength < 8 || wantsLength > 128 ); {
    alert("Please select a character count between 8 and 128 characters to continue.")
  }

//confirm asking users if they want lowercase characters included //
var wantsLowerCase = confirm("Do you want lower case characters included?");
console.log(wantsLowerCase);

var userChoices = {
  lowercase: wantsLowerCase

}
console.log(userChoices.lowercase);

  // confirming user choices
  if (wantsLowerCase === true){
    alert("Your password will contain lowercase characters!");
  }
  else (wantsLowerCase === false); {
    alert("Your password will not contain lowercase characters.")
  }

// confirm asking users if they want uppercase included // 
var wantsUpperCase = confirm("Do you want upper case characters included?");

console.log(wantsUpperCase);
var userChoices = {
  uppercase: wantsUpperCase

}
console.log(userChoices.uppercase);

    // confirming user choices
  if (wantsUpperCase === true){
    alert("Your password will contain uppercase characters!");
  }
  else (wantsUpperCase === false); {
    alert("Your password will not contain uppercase characters.")
  }


// confirm asking users if they want number characters included // 
var wantsNumeric = confirm("Do you want numeric characters included?");
//if they choose true that value will store back in the wantsLowerCase variable
console.log(wantsNumeric);
var userChoices = {
  numeric: wantsNumeric

}
console.log(userChoices.numeric);

    // confirming user choices
    if (wantsNumeric === true){
      alert("Your password will contain numeric characters!");
    }
    else (wantsNumeric === false); {
      alert("Your password will not contain numeric characters.")
    }

// confirm asking user if they want special characters included // 
var wantsSpecialChars = confirm("Do you want numeric characters included?");
//if they choose true that value will store back in the wantsLowerCase variable
console.log(wantsSpecialChars);
var userChoices = {
  specialchars: wantsSpecialChars

}
console.log(userChoices.specialchars);

    // confirming user choices
    if (wantsSpecialChars === true){
      alert("Your password will contain special characters!");
    }
    else (wantsSpecialChars === false); {
      alert("Your password will not contain special characters.")
    }

// empty array to store user selections
var userschoices = [];

for (var i = 0; i < wantsLength; i++){
  var userchoices = userSelections [Matt.floor (Math.random() * userPref.length)];
  passwoord.push(userSelections);
}
var userSelections = password.join ("");
userData(userSelections);
return userSelections;

function userData(userSelections) {
  document.getElementById("password").textContent = userSelections;
}

// having computer generate password // 
for(var i=0; i<=userschoices.length; i++){
      password = password + values.chartAt(Math.floor(Matt.random() * Math.floor(userschoices.length - 1)));

// add password to display // 
      document.getElementById("password").value = password;
}

// ASSIGNMENT CODE GIVEN // 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);