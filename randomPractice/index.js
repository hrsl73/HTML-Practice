// const numbers=[1,2,3,4,5,6,7,8,9,10]

// function square(num){
//     return Math.pow(num,2)
// }
// const squares = numbers.map(square)
// console.log(squares)

// const cubes = numbers.map(function(num){
//     return Math.pow(num,3)
// })
// console.log(cubes)

// const evens = numbers.filter(function(num){
//     return num%2===0
// })
// console.log(evens)

// const sum = numbers.reduce(function(accumulator,current){
//     return accumulator + current
// },0)
// console.log("this is sum:",sum)

// const date = new Date(2025,0,2,4,5,30)
// const dateee = new Date(0)
// console.log(date)
// console.log(dateee)

// function createCounter(){
//     let count = 0
//     function increment(){
//         count++
//         console.log(`count incremented to: ${count}`)
//     }
//     function getCount(){
//         return count
//     }
//     return {increment, getCount}
// }
// const counter = createCounter()
// console.log("current count is:", counter.getCount())
// counter.increment()
// // counter()
// // counter()
// console.log("current count is:", counter.getCount())
// counter.increment()
// console.log("current count is:", counter.getCount())

// function createGame(){
//     let score = 0
//     function increaseScore(){
//         score++
//         console.log(`Score increased.`)
//     }
//     function decreaseScore(){
//         score--
//         console.log(`Score decreased.`)
//     }
//     function getScore(){
//         return score
//     }
//     return {increaseScore, decreaseScore, getScore}
// }
// const game = createGame()
// console.log("Initial score:", game.getScore())
// game.increaseScore()
// console.log("Current score:", game.getScore())
// game.increaseScore()
// console.log("Current score:", game.getScore())
// game.decreaseScore()
// console.log("Final score:", game.getScore())  

// setTimeout(()=>{
//     console.log("This message is shown after 2 seconds")
// },2000)

// for(let i=1;i<5;i++){
//     setTimeout(()=>{
//     console.log(`this message is shown after ${i*2} seconds`)
// },i*2000)
// }

let timeoutId
function startTimer(){
    timeoutId = setTimeout(() => {window.alert("yout clicked the button 3 seconds ago")}, 3000);
    console.log("Timer started")
}
function clearTimer(){
    clearTimeout(timeoutId)
    window.alert("Timer cleared")
    console.log("Timer cleared")
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
