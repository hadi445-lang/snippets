// Regular expression to validate an email address
const emailRegex = /^[a-zA-Z0-0._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email = "test@example.com";

// Check if the email is valid
const isValidEmail = emailRegex.test(email);

// Print a meaningful message
if (isValidEmail) {
    console.log(`"${email}" is a valid email address.`);
} else {
    console.log(`"${email}" is not a valid email address.`);
}