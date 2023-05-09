// let valorCompraTV = 1500;
// //32px < 1300
// //55px < 1500
// //75px > 2500
// if (valorCompraTV <= 1300){
//     console.log(`Vou comprar 32px`)
// } 
// else if(valorCompraTV <= 1500){
//     console.log(`Vou comprar 55px`)
// }
// else{
//     console.log(`Comprar 75px`)
// }

// console.log("final do programa");

//

//Operador ternário
// let testeValor = true;
// let media = 7 >=9;
// let sal = 1320;
// let vouAPraia = sal >= 1500 ? "vou a Praia" : "Ficar em casa"
// console.log(!testeValor);
// console.log(media);
// console.log(vouAPraia);

//Valores:Bonus = "ptsBonus3"
//ptsBonus1 - console.log("2.0pts");
//ptsBonus2 - console.log("1.55pts");
//ptsBonus3 - console.log("1.0pts");
//ptsBonus4 - console.log("0.5pts");
//ptsBonus5 - console.log("0.25pts");
//ptsBonus6 - console.log("0.0pts");

//Switch
let pontosAluno = "ptsBonus1"
switch(pontosAluno) {
    case "ptsBonus2" :
        console.log('1.55 pts');
        break;
        case "ptsBonus2" :
        console.log('1.0 pts');
        break;
        case "ptsBonus3" :
        console.log('0.5 pts');
        break;
        case "ptsBonus4" :
        console.log('0.25 pts');
        break;
        case "ptsBonus5" :
        console.log('0.0 pts');
        break;
        default:
            console.log("Não foi aplicado pontos adicionais")
            break; 
}
console.log('Fim do programa')
