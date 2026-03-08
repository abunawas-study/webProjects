function calculateResult(){
    // Get the input values
    const Principle = parseFloat(document.getElementById('Principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('time').value);

    // Calculate the simple interest
    const simpleInterest =  (Principle * interestRate * time) / 100;

    // Display the result
    document.getElementById('result').innerText = `The simple interest is ${simpleInterest.toFixed(2)}`;
}

// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateResult);