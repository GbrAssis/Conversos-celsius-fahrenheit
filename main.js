let celsius = 0

function conversor() {
    let celsius = document.getElementById("celsius").value
    let message = document.getElementById('message') 
    let resultado = celsius * 1.8 + 32 
    message.innerHTML = celsius + '°C é equivalente a ' + resultado + '°F' 
}

