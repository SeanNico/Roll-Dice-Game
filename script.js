function rollDice() {
    const numberInput = document.querySelector("#numberInput").value;
    const displayImg = document.querySelector("#displayImg");
    const resultDisplay = document.querySelector("#result");
    let images = [];
    let total = [];

    if (numberInput < 1 || numberInput > 6) {
        alert("Please enter a number between 1 and 6.");
    } else {
        for(let i = 0; i < numberInput; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            total.push(value);
            images.push(`<img src="dice_image/dice-six-faces-${value}.png" alt="Dice ${value}" width="300" height="300"->`);
        }
    }
    resultDisplay.textContent = `Total: ${total.reduce((a, b) => a + b)}`;
    displayImg.innerHTML = images.join(" ");
}
