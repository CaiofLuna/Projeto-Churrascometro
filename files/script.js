//carne - 400gr por pessoa + de 6horas - 650gr
// cerveja - 1200ml por pessoa + 6horas - 2000ml
// refrigerante/água - 1000ml por pessoa + 6horas 1500ml
//crianças valem por 0,5

let inputAdu = document.getElementById('adultos')
let inputCri = document.getElementById('criancas')
let inputDura = document.getElementById('duracao')

let resultado = document.getElementById('valores');

function calcular(){

    console.log('calculado...')

    let adultos = inputAdu.value
    let criancas = inputCri.value
    let duracao = inputDura.value

    let qtdTotalCarne = (carnePP(duracao) * adultos + ((carnePP(duracao))/2 * criancas))/1000
    console.log(qtdTotalCarne);

    let qtdTotalCerveja = (cervejaPP(duracao) * adultos)/1000
    console.log(qtdTotalCerveja);

    let qtdTotalBebidas = (BebidasPP(duracao) * adultos + ((BebidasPP(duracao))/2 * criancas))/1000
    console.log(qtdTotalBebidas);

    resultado.innerHTML = `<p>${qtdTotalCarne}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil((qtdTotalCerveja * 1000)/350)} Latas de cerveja com 350ml</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}L de Refrigerante</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
    return 400;}
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
    return 1200;}
}

function BebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
    return 1000;
    }
}