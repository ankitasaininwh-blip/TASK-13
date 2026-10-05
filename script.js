function checkNumber() {

    // Three variables
    let number = Number(document.getElementById("numberInput").value);
    let result = document.getElementById("result");
    let message;

    // Check whether number is even or odd
    if (number % 2 === 0) {
        message = "The number " + number + " is even.";
    } else {
        message = "The number " + number + " is odd.";
    }

    // Display result
    result.textContent = message;

    // Console output
    console.log(message);
}