console.log("hello world");
var nome;
var idade;
var ingressoValid = false;
var ingresso;
var botaoVerificar = document.getElementById("botaoVerificar");
botaoVerificar.onclick = function () {
        alert("você iniciou sua verificação")
        nome = prompt("qual o seu nome?");
        while (nome == "") {
                alert("preencha o campo nome");
                nome = prompt("preencha seu nome")
        }
        console.log("seja bem vindo", nome)
        idade = prompt("qual a sua idade?");
        while (idade == "") {
                alert("preencha sua idade");
                idade = prompt("preencha sua idade")
        }
        let result = verificaçaoMaioridade(idade);
        if (result == false) {
                throw new Error("cadastro falho!");

        }
        validaçao(idade);
        ingresso = prompt("você tem um ingresso? (sim ou não)")
        while (!ingressoValid) {
                ingresso = prompt("tem ingresso sim/não")
                if (ingresso === "sim") {
                        alert("respondeu " + ingresso)
                        ingressoValid = true

                } else if (ingresso = "não") {
                        alert("respondeu " + ingresso)
                        ingressoValid = true
                }
        }

}
function verificaçaoMaioridade(idade) {
        if (idade < 18 == true) {
                console.log("menor de idade!! entrada negada")
                alert("retornando")
                return false;
        }

}
function validaçao(idade) {
        if (idade >= 150) {
                console.log("idade invalida, você já estaria morto haha")
                alert("retornando")
                return;
        }
}
function validarIngressp() {
        if (ingressoValid == false) {
                console.log("você não possui ingresso vá embora liso")
                alert("retornando")
                return;
        }
}