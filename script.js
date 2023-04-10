// Logica nova
// Fazer com que a imagem que a pessoa selecionar fique com borda
//Cria uma coleção de elemento / O jeito de acessa-los é parecido com o jeito de acessar um array
var papel = document.getElementsByClassName("papel-img")
var papelplayer = document.getElementById("papel-player")
var papelrobo = document.getElementById("papel-robo")

var pedra = document.getElementsByClassName("pedra-img")
var pedraplayer = document.getElementById("pedra-player")
var pedrarobo = document.getElementById("pedra-robo")

var tesoura = document.getElementsByClassName("tesoura-img")
var tesouraplayer = document.getElementById("tesoura-player")
var tesourarobo = document.getElementById("tesoura-robo")

var escolha = ""

let contaclique1 = 1
let contaclique2 = 1
let contaclique3 = 1

papelplayer.addEventListener("click", function () {
    if (contaclique1 % 2 == 0) {
        papelplayer.style.cssText = 'border: 3px solid white;';
        escolha = ""
    } else {
        escolha = "papel"
        console.log(escolha)
        papelplayer.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
        pedraplayer.style.cssText = 'border: 3px solid white;';
        tesouraplayer.style.cssText = 'border: 3px solid white;';
    }
    contaclique1 = contaclique1 + 1
    contaclique2 = 1
    contaclique3 = 1
})

pedraplayer.addEventListener("click", function () {
    if (contaclique2 % 2 == 0) {
        pedraplayer.style.cssText = 'border: 3px solid white;';
        escolha = ""
    } else {
        escolha = "pedra"
        console.log(escolha)
        papelplayer.style.cssText = 'border: 3px solid white;';
        pedraplayer.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
        tesouraplayer.style.cssText = 'border: 3px solid white;';
    }
    contaclique1 = 1
    contaclique2 = contaclique2 + 1
    contaclique3 = 1
})

tesouraplayer.addEventListener("click", function () {
    if (contaclique3 % 2 == 0) {
        tesouraplayer.style.cssText = 'border: 3px solid white;';
        escolha = ""
    } else {
        escolha = "tesoura"
        console.log(escolha)
        papelplayer.style.cssText = 'border: 3px solid white;';
        pedraplayer.style.cssText = 'border: 3px solid white;';
        tesouraplayer.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
    }
    contaclique1 = 1
    contaclique2 = 1
    contaclique3 = contaclique3 + 1
})

var resultado = document.getElementById("resultado")
var botaoConfima = document.getElementById("botao-confirma")


var resultadoempate = document.getElementById("filho-resultado-empate")
var resultadovitoria = document.getElementById("filho-resultado-vitoria")
var resultadoderrota = document.getElementById("filho-resultado-derrota")
botaoConfima.addEventListener("click", function () {
    if (escolha == "") {
        alert("Escolha entre pedra, papel e tesoura")
    } else {
        let escolhaRobo = Math.floor(Math.random() * 3) + 1;
        resultadovitoria.style.cssText = 'Display: none;';
        resultadoempate.style.cssText = 'Display: none;';
        resultadoderrota.style.cssText = 'Display: none;';
        //Robo
        //1 = pedra
        //2 = papel
        //3 = tesoura
        switch (escolhaRobo) {
            case 1:
                tesourarobo.style.cssText = 'border: 3px solid white;';
                papelrobo.style.cssText = 'border: 3px solid white;';
                pedrarobo.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
                switch (escolha) {
                    case "pedra":
                        resultadoempate.style.cssText = 'Display: flex;';
                        break;
                    case "papel":
                        resultadovitoria.style.cssText = 'Display: flex;';
                        break;
                    case "tesoura":
                        resultadoderrota.style.cssText = 'Display: flex;';
                        break;
                }
                break;
            case 2:
                papelrobo.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
                pedrarobo.style.cssText = 'border: 3px solid white;';
                tesourarobo.style.cssText = 'border: 3px solid white;';
                switch (escolha) {
                    case "pedra":
                        resultadoderrota.style.cssText = 'Display: flex;';
                        break;
                    case "papel":
                        resultadoempate.style.cssText = 'Display: flex;';
                        break;
                    case "tesoura":
                        resultadovitoria.style.cssText = 'Display: flex;';
                        break;
                }
                break;
            case 3:
                tesourarobo.style.cssText = 'border: 3px solid rgb(55, 255, 55);';
                papelrobo.style.cssText = 'border: 3px solid white;';
                pedrarobo.style.cssText = 'border: 3px solid white;';
                switch (escolha) {
                    case "pedra":
                        resultadovitoria.style.cssText = 'Display: flex;';
                        break;
                    case "papel":
                        resultadoderrota.style.cssText = 'Display: flex;';
                        break;
                    case "tesoura":
                        resultadoempate.style.cssText = 'Display: flex;';
                        break;
                }
                break;
        }
    }
})


// Logica antiga
// var Resultado = "";
// var num = 0;
// //Transformar o botão em número
// function pedra() {
//     num = 1;
//     console.log(num)
// }
// function Papel() {
//     num = 2;
//     console.log(num)
// }
// function Tesoura() {
//     num = 3;
//     console.log(num)
// }
// //Gerar um número aleatório e terminar o código
// function NumeroAle(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var Randon = Math.floor(Math.random() * (max - min)) + min;
//     console.log(Randon);
//     switch (Randon) {
//         case 1:
//             document.getElementById("Resultado").innerHTML = `<img src="img/pedra.jpg" alt="Pedra">`
//             break;

//         case 2:
//             document.getElementById("Resultado").innerHTML = `<img src="img/papal.jpg" alt="Papel">`
//             break;

//         case 3:
//             document.getElementById("Resultado").innerHTML = `<img src="img/tesoura.jpg" alt="Tesoura">`
//             break;
//     }
//     if (num == Randon) {
//         Resultado = "impate"
//         console.log(Resultado)
//     }
//     else if (num - Randon == -1) {
//         Resultado = "Maquina ganhou"
//         console.log(Resultado)
//     }
//     else if (num - Randon == -2) {
//         Resultado = "Player ganhou"
//         console.log(Resultado)
//     }
//     else if (num - Randon == 1) {
//         Resultado = "Player ganhou"
//         console.log(Resultado)
//     }
//     else if (num - Randon == 2) {
//         Resultado = "Maquina ganhou"
//         console.log(Resultado)
//     }
// }
// console.log(num);