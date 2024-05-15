var resultadoElement;
function converter_Temperatura(){
    var temperatura_celsius = parseFloat(document.getElementById('temperatura').value);
    if (isNaN(temperatura_celsius)){
        alert("Digite um número válido!");
    }
    else{
        var temperaturaFahrenheit = (1.8*temperatura_celsius) + 32;
        resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "A temperatura é igual a: " + temperaturaFahrenheit.toFixed(2) + "° Fahrenheit";
    }
}
function limparConsole(){
    resultadoElement.innerHTML = " ";
}