function exibirNumero(caracter) {
    document.getElementById("resultado").value += caracter;
}

function exibirOperacao(caracter) {
    document.getElementById("resultado").value += caracter;
}

function resetar() {
    document.getElementById("resultado").value = " ";
}

function calcularResultado() {
    let conta = document.querySelector("#resultado").value;
    if (conta)
        document.querySelector("#resultado").value = eval(conta);
}
