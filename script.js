

// PSEUDO CODE //
// 1. User clicks 'Generate Password button which starts a series of prompt questions from computer to user.
// 2. User answers series of questions entering criteria into database.

    // PASSWORD GENERATOR QUESTIONS & CORRESPONDING CRITERIA 
      // How many characters would you like your password to be?

          // If characters count between 8 and 128, then user input is TRUE

          // If character count is [input < 8, OR input > 128] then input is FALSE & user gets an alert ("You must select a character count between 8 and 128")

      // What character types would you like included in your password (select from: lowercase, uppercase, numberic, and/or special characters)?

          // If user inputs one or more of the following (lowercase, uppercase, numeric, and/or special characters) then the input is TRUE

          // If the user selects any input that does match AT LEAST one of the following (lowercase, uppercase, numeric, and/or special characters), then the input is FALSE and user will get a prompt (The character type you selected is not valid. Please pick again from the following options: lowercase, uppercase, numeric, and/or special characters.)

// 3. When both answers have been correctly inputed/validated then the computer should generate a random password that meets all inputed critera definitions. Password can either be displayed in an alert or written to the page.






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
