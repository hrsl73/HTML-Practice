function rollDice(){

    const numOfDice = document.getElementById("numDice").value;
    const diceResults = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceimages");
    const values = [];
    const images = [];


    for(let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="../images/dice_images/${value}.png" alt="Dice: ${value}"> `);
    }

    diceResults.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");


    // console.log(`images/dice_images/${values}.png`);

}