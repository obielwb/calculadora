function ExibirNumero(caracter) {
    document.getElementById("resultado").value += caracter;
}

function ExibirOperacao(caracter) {
    document.getElementById("resultado").value += caracter;
}

function Resetar() {
    document.getElementById("resultado").value = " ";
}

function CalcularResultado() {
    let conta = document.querySelector("#resultado").value;
    if (conta)
        document.querySelector("#resultado").value = eval(conta);
}
