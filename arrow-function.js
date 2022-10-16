function apresenta(nome){
    return `Meu nome é: ${nome}`;
    
}
console.log(apresenta("Daniel"));

//Arrow Function
const aprensetarArrow = nome => `Meu nome é: ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com mais de uma linha

const somaNUmerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10 ){
        return "Somente numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão