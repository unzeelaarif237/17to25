
// 1
function greetUser () {
   var firstName = prompt("Please enter your first name:");
  var lastName = prompt("Please enter your last name:");
    
    var fullName = firstName + " " + lastName;
    
    alert("Hello, " + fullName + "!");
}
// 2
function getPhoneModelLength() {
    var phoneModel = prompt("What is your favorite mobile phone model?");
    
var length = phoneModel.length;
    
    alert("The length of your favorite mobile phone model is: " + length + " characters.");
}

// Call the functions here if you want them to run on page load
window.onload = function() {
    greetUser ();
    getPhoneModelLength(); // Uncomment this line if you want to ask for the phone model length right after greeting
}
// 3
function findIndexOfN() {
    var word = "Pakistani";
   var letter = "n";
var index = word.indexOf(letter);

    // Display the result using string concatenation
    if (index !== -1) {
        alert("The index of letter \"" + letter + "\" in the word \"" + word + "\" is: " + index);
    } else {
        alert("The letter \"" + letter + "\" is not found in the word \"" + word + "\".");
    }
}

// Run the function when the window loads
window.onload = function() {
    findIndexOfN();
};

// 4 last index
function findLastIndexOfL() {
    // Prompt the user for a phrase and a letter
    var phrase = prompt("Please enter a phrase:", "Hello World") || "Hello World"; // Default to "Hello World" if user cancels
    var letter = prompt("Please enter a letter to find:", "l") || "l"; // Default to "l" if user cancels
    var index = phrase.lastIndexOf(letter);

    // Display the result using document.write
    if (index !== -1) {
        document.write("The last index of letter \"" + letter + "\" in the phrase \"" + phrase + "\" is: " + index + "<br>");
    } else {
        document.write("The letter \"" + letter + "\" is not found in the phrase \"" + phrase + "\".<br>");
    }
}

// Call the function immediately
findLastIndexOfL();
// 5
function findCharacterAtIndex() {
  var word = "Pakistani";
    var index = 3; // 3rd index
    var character = word.charAt(index); // Get the character at the specified index

    // Display the result using document.write
    document.write("The character at index " + index + " in the word \"" + word + "\" is: " + character);
}

// Call the function immediately
findCharacterAtIndex();
// 6
function greetUser () {
    // Prompt the user for their first name
    var firstName = prompt("Please enter your first name:");
    // Prompt the user for their last name
    var lastName = prompt("Please enter your last name:");

    // Merge the first and last names using the concat() method
    var fullName = firstName.concat(" ", lastName);

    // Display the greeting message on the webpage
    document.write("Hello, " + fullName + "! Welcome!");
}

// Call the function immediately
 greetUser ();

// Replaceing
function replaceHyderWithIslam() {
    // Prompt user for the original word
    var originalWord = prompt("Please enter the original word (default is 'Hyderabad'):") || "Hyderabad"; // Default to "Hyderabad" if user cancels

    var wordToReplace = "Hyder"; // Word to replace
    var newWord = "Islam"; // New word to insert

    // Replace "Hyder" with "Islam" in the original word
    var resultWord = originalWord.replace(wordToReplace, newWord);

    // Display the result using document.write
    document.write("Original word: " + originalWord + "<br>");
    document.write("Modified word: " + resultWord);
}

// Call the function immediately
replaceHyderWithIslam();

// 8
//Function to replace "and" with "&" in a given string
function replaceAndWithAmpersand() {
    // Prompt the user for a string
    var originalString = prompt("Please enter a string:", "Ali and Sami are best friends. They play cricket and football together.");
    var modifiedString = originalString.replace(/and/g, "&"); // Using regex to replace all occurrences
    document.write("Modified String: " + modifiedString + "<br>");
}
// 9
// Function to convert a string to a number
function convertStringToNumber() {
    // Prompt the user for a string that represents a number
    var stringNumber = prompt("Please enter a number as a string:", "472");
    var convertedNumber = Number(stringNumber); // Converting string to number
    document.write("Converted Number: " + convertedNumber + "<br>");
}

// Call the functions
replaceAndWithAmpersand();
convertStringToNumber();

// 10
// Function to convert user input to uppercase
function convertToUpperCase() {
    // Prompt the user for input
    var userInput = prompt("Please enter some text:");
    
    // Convert the input to uppercase
    var upperCaseInput = userInput.toUpperCase();
    
    // Display the result using document.write
    document.write("Original Input: " + userInput + "<br>");
    document.write("Uppercase Input: " + upperCaseInput + "<br>");
}

// Call the function
convertToUpperCase();


// 11
// Function to convert user input to title case using regex
function toTitleCaseUsingRegex() {
    // Prompt the user for input
    var userInput = prompt("Please enter a sentence:");

    // Convert to title case using regex
    var titleCaseInput = userInput.replace(/\b\w/g, char => char.toUpperCase());

    // Display the result
    document.write("Original Input: " + userInput + "<br>");
    document.write("Title Case Input: " + titleCaseInput + "<br>");
}

// Call the function
toTitleCaseUsingRegex();

// 12
// Define the variable num
var num = 35.36;

// Convert num to a string and remove the dot
var numString = num.toString().replace('.', '');

// Display the result in the browser
document.write("Original Number: " + num + "<br>");
document.write("Converted String: " + numString + "<br>");

// 13
// Function to validate username
function validateUsername() {
    var username; // Changed from let to var
    var specialSymbols = ['@', '.', '!', ',']; // List of special symbols

    while (true) {
        // Prompt the user for input
        username = prompt("Please enter a username:");

        // Check for special symbols
        var containsSpecialSymbol = specialSymbols.some(function(symbol) {
            return username.includes(symbol);
        });

        // If special symbol is found, prompt again
        if (containsSpecialSymbol) {
            alert("Invalid username! Please enter a valid username without special symbols: " + specialSymbols.join(' '));
        } else {
            // If valid, break the loop
            break;
        }
    }

    // Display the valid username
    document.write("Valid Username: " + username + "<br>");
}

// Call the function
validateUsername();

// 14
// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item
function searchItem() {
    // Prompt the user for the item to search
    var userInput = prompt("Enter the item you want to search for:").toLowerCase(); // Convert input to lowercase

    // Check if the item exists in the array
    var found = A.some(function(item) {
        return item.toLowerCase() === userInput; // Compare in a case-insensitive manner
    });

    // Inform the user about the search result
    if (found) {
        alert(userInput + " is found in the list.");
    } else {
        alert(userInput + " is not found in the list.");
    }
}

// Call the search function
searchItem();
// 15
// Function to validate password
function validatePassword() {
    var password; // Declare password variable

    while (true) {
        // Prompt the user for input
        password = prompt("Please enter a password:");

        // Check password requirements
        var hasAlphabets = /[a-zA-Z]/.test(password); // Check for alphabets
        var hasNumbers = /[0-9]/.test(password); // Check for numbers
        var isValidLength = password.length >= 6; // Check length
        var startsWithLetter = isNaN(password.charAt(0)); // Check if it does not start with a number

        // Validate the password
        if (hasAlphabets && hasNumbers && isValidLength && startsWithLetter) {
            alert("Valid Password: " + password);
            break; // Exit the loop if the password is valid
        } else {
            // If invalid, prompt again with a message
            alert("Invalid password! Please ensure your password meets the following requirements:\n" +
                "- It should contain both alphabets and numbers.\n" +
                "- It should not start with a number.\n" +
                "- It must be at least 6 characters long.");
        }
    }

    // Display the valid password
    document.write("Your valid password is: " + password + "<br>");
}

// Call the function
validatePassword();


// 16
function convertStringToArray() {
    var university = "University of Karachi"; // Original string
    var universityArray = university.split(" "); // Split the string into an array

    // Display the elements of the array in the browser
    document.write("<h2>Elements of the Array:</h2>");
    document.write("<p>"); // Start a paragraph
    for (var i = 0; i < universityArray.length; i++) {
        document.write(universityArray[i]); // Write each element without list items
        if (i < universityArray.length - 1) {
            document.write(" "); // Add a space between words
        }
    }
    document.write("</p>"); // End the paragraph
}

// Directly call the function
convertStringToArray();

// 17
function displayLastCharacter() {
    // Get user input
    var userInput = prompt("Please enter a string:");
    
    // Check if the input is not empty
    if (userInput) {
        // Get the last character
        var lastCharacter = userInput.charAt(userInput.length - 1);
        
        // Display the last character
        document.getElementById("result").innerHTML = "The last character is: " + lastCharacter;
    } else {
        document.getElementById("result").innerHTML = "No input provided.";
    }
}
// 18
function countOccurrences() {
    // Define the string
    var str = "The quick brown fox jumps over the lazy dog";
    
    // Convert the string to lower case to make the search case insensitive
    var lowerStr = str.toLowerCase();
    
    // Split the string into words
    var words = lowerStr.split(" ");
    
    // Count occurrences of the word "the"
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] === "the") {
            count++;
        }
    }
    
    // Display the result
    document.getElementById("result").innerHTML = 'The word "the" occurs ' + count + ' times.';
}