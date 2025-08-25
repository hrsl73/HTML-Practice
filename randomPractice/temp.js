const textbox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert(){

    if (toFahrenheit.checked){
        // temp = Number(textbox.value)
        // temp = (temp * 9/5) + 32
        // result.textContent = `${temp} °F`
        result.textContent = `${(Number(textbox.value) * 9/5) + 32} °F`
    }
    else if (toCelsius.checked){
        result.textContent = `${(Number(textbox.value) - 32) * 5/9} °C`

    }
    else{
        result.textContent = "Please select a conversion type"
    }
}