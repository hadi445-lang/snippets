// Regular expression to check if "apple" exists in the string
const regex = /apple/;
const testString = "I have an apple in my basket.";

// Check if the pattern matches
const result = regex.test(testString);

// Print a meaningful message
if (result) {
  console.log("The word 'apple' was found in the sentence.");
} else {
  console.log("The word 'apple' was not found in the sentence.");
}
