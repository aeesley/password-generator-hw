

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

// arrays for password selectors //
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialchars = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"];
var userschoices = [];

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
var wantsLength = prompt("How many characters should the password have?"); 
console.log("Length chosen = " + wantsLength);

//confirm asking users if they want lowercase characters included //
var wantsLowerCase = confirm("Do you want lower case characters included?");
console.log(wantsLowerCase);

var userChoices = {
  lowercase: wantsLowerCase

}
console.log(userChoices.lowercase);

// confirm asking users if they want uppercase included // 
var wantsUpperCase = confirm("Do you want upper case characters included?");

console.log(wantsUpperCase);
var userChoices = {
  uppercase: wantsUpperCase

}
console.log(userChoices.uppercase);

// confirm asking users if they want number characters included // 
var wantsNumeric = confirm("Do you want numeric characters included?");
//if they choose true that value will store back in the wantsLowerCase variable
console.log(wantsNumeric);
var userChoices = {
  numeric: wantsNumeric

}
console.log(userChoices.numeric);

// confirm asking user if they want special characters included // 
var wantsSpecialChars = confirm("Do you want numeric characters included?");
//if they choose true that value will store back in the wantsLowerCase variable
console.log(wantsSpecialChars);
var userChoices = {
  specialchars: wantsSpecialChars

}
console.log(userChoices.speacialchars);



// generate the numbe using the math floow thing and isntead of the * 10, and replace with the array.
// another blank array, and the user selections populat the new array to choose from, then the math floor random thing picks from there. Add some functionality where it guarantees a certain output (in case the computer chooses only lowercase or something)

// GET IT ON THE SCREEN
// Grab ID from the box and do text content or append LOOK UP THE APPEND FUNCTION OR TEXT CONTENT


// OTHER IDEAS // ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// // generate password
// function generate(){
//   // set password length and complexity
//   let complexity = document.getElementById( ).value;

//   let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

//   let password = "";

//   // create for loop to choose password characters

//   for(var i=0; i<=complexity; i++){
//     password = password + values.chartAt(Math.floor(Matt.random() * Math.floor(values.length - 1)));

//     // add password to textbox/display area

//     document.getElementById("display").value = password;
//   }

// }

//for(i=0; i<lowercase.length; i++){
//   console.log(lowercase[i]);
// }