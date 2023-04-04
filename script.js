// Logica nova
// Fazer com que a imagem que a pessoa selecionar fique com borda
//Cria uma coleção de elemento / O jeito de acessa-los é parecido com o jeito de acessar um array
var papel = document.getElementsByClassName("papel-img")
var pedra = document.getElementsByClassName("pedra-img")
var tesoura = document.getElementsByClassName("tesoura-img")

for (let i = 0; i < papel.length; i++) {
    papel[i].addEventListener("click", function () {
        elemento.style.border = "3px solid rgb(55, 255, 55);";
    });
}








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