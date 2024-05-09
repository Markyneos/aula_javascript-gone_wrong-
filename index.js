function converter_Temperatura(){
    var temperatura_celsius = prompt("Digite a temperatura em Celsius:");
    if (isNaN(temperatura_celsius)){
        alert("Digite um número válido!");
    }
    else{
        var temperatura_fahrenheit = 1.8*temperatura_celsius + 32;
    alert("Temperatura em fahrenheit: " + temperatura_fahrenheit);
    }
}