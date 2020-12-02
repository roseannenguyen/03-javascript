// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// characters
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

// value holders
var specialSelect = "";
var lowerSelect = "";
var upperSelect = "";
var numbersSelect = "";
var finalpassword = [];
var writePassword = "";



function promptQuestions() {
  var passlength = "";
      while (isNaN(passlength) || passlength < 8 || passlength > 128) {
        passlength = prompt("How long would you like your password to be? Please choose a number between 8 through 128.")
          if (passlength === null ) {
            alert("See you later!")
                return;
          }
        
          var specialSelect = confirm("Do you want special characters?");
          var lowerSelect = confirm("Do you want lower case?");    
          var upperSelect = confirm("Do you want upper case?");
          var numbersSelect = confirm("Do you want numbers?");

            if (specialSelect) {
              finalpassword = finalpassword.concat(special)
            }
            if (lowerSelect) {
              finalpassword = finalpassword.concat(lowerCase)
            }
            if (upperSelect) {
              finalpassword = finalpassword.concat(upperCase)
            }
            if (numbersSelect) {
              finalpassword = finalpassword.concat(numbers)
            }
      }
       
}
          function writePassword() {
            var password = generatePassword(); {
              for (var i=0; i < passlength; i++) {
                password = finalpassword.charAt[Math.floor(math.random() * finalpassword.length)];
                console.log(password)
              }
            }
            var passwordText = document.querySelector("#password");
            passwordText.value = password;
          }
        
      

     
      
        
      
   


      
      

  
