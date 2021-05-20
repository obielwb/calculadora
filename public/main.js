// Operações
function Somar(num1, num2) {
    return num1 + num2;
}

function Subtrair(num1, num2) {
    return num1 - num2;
}

function Multiplicar(num1, num2) {
    return num1 * num2;
}

function Dividir(num1, num2) {
    return num1 / num2;
}


function ExibirNumero(caracter) {
    document.getElementById("resultado").value += caracter;
}


// var valorInput = [];
function ExibirOperacao(caracter) {
    document.getElementById("resultado").value += caracter;
    /*
    var input = document.getElementById("resultado").value;
    console.log(input);
    for (var i in input) {
        valorInput = [];
        valorInput.push(i);
    }
    console.log(valorInput);
    var ultimoValor = valorInput[valorInput.length - 1];
    if (ultimoValor == '+' || ultimoValor == '-' || ultimoValor == '*' || ultimoValor == '/' ) {
        alert("Operação Inválida!");
        input = " ";
    }
    else 
        document.getElementById("resultado").value += caracter;
    */
}


function Resetar() {
    document.getElementById("resultado").value = " ";
}

function CalcularResultado() {
    let conta = document.querySelector("#resultado").value;
    if (conta)
        document.querySelector("#resultado").value = eval(conta);
}