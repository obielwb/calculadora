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


function ExibirNumero(id) {
    let valor = document.getElementById(`${id}`).value;

    document.getElementById("resultado").value += valor;
}