const ages =[16,17,18,18,50]

const adults = ages.filter(isAdult)
console.log(adults)

function isAdult(element){
    return element >=18
}



function guessNumber(){

const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum-minNum +1))

let attempts=0
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`)
    guess = Number(guess)
    console.log(typeof guess, guess)

    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < minNum || guess > maxNum){
        alert(`Please enter a number between ${minNum} and ${maxNum}`)
    }
    else{
        attempts++
        if(guess <answer){
            alert("Too low! Try again")
        }
        else if(guess > answer){
            alert("Too high! Try again")
        }
        else{
            alert(`Congrats! You guessed the number ${answer} in ${attempts} attempts`)
            running = false
        }
    }
}
}

document.getElementById("guessBtn").addEventListener("click", guessNumber);
