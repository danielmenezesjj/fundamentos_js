// parametros de função

function soma(num1, num2){
    return num1 + num2
}


console.log(soma(2, 2));

function mutiplica(numero1, numero2){

    return numero1 * numero2;

}

console.log(mutiplica(soma(2, 5), soma(5, 5)));

function comParametro(param){
    console.log(param);

}

comParametro();