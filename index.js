function showLargestNumber() {
    // Prompt the user to enter two numbers
    var number1 = parseFloat(prompt("Enter the first number:"));
    var number2 = parseFloat(prompt("Enter the second number:"));

    // Determine the larger number and display it in an alert
    if (number1 > number2) {
        alert("The larger number is: " + number1);
    } else if (number2 > number1) {
        alert("The larger number is: " + number2);
    } else {
        alert("Both numbers are equal.");
    }
}

// Call the function
showLargestNumber();