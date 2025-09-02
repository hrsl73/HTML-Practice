const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.style.backgroundColor = "red";
    myBox.style.borderRadius = "50%";
    myBox.style.transition = "all 0.3s ease";
    myBox.textContent = "😫"
})
document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.style.borderRadius = "0%";
    myBox.style.transition = "all 0.3s ease";
    myBox.textContent = "😀"
})
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
    }
})