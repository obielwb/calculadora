let modoDaCalculadora;

const numberSubmit = document.querySelectorAll("input.numero")

for (let i = 0; i <= 10; i++) {
    numberSubmit[i].addEventListener("click", () => {
        // Se o usuário acabou de realizar uma conta, e o resultado está sendo exibido
        // limpa o display antes da digitazão de outro caracter
        if (modoDaCalculadora === "Exibição") {
            document.getElementById("resultado").value = " ";
        }
        modoDaCalculadora = "Inserção";

        document.getElementById("resultado").value += numberSubmit[i].value;
    })

}

function exibirOperacao(caracter) {
    document.getElementById("resultado").value += caracter;
}

function resetar() {
    document.getElementById("resultado").value = " ";
}

function calcularResultado() {
    modoDaCalculadora = "Exibição";
    let conta = document.querySelector("#resultado").value;
    if (conta)
        document.querySelector("#resultado").value = eval(conta);
}
