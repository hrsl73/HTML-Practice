const numbers=[1,2,3,4,5,6,7,8,9,10]

function square(num){
    return Math.pow(num,2)
}
const squares = numbers.map(square)
console.log(squares)

const cubes = numbers.map(function(num){
    return Math.pow(num,3)
})
console.log(cubes)

const evens = numbers.filter(function(num){
    return num%2===0
})
console.log(evens)

const sum = numbers.reduce(function(accumulator,current){
    return accumulator + current
},0)
console.log("this is sum:",sum)


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
