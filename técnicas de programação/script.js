//********** VARIÁVEIS ***********//
var nome = 'Luana '; // var pode ser alterada (string)
var sobrenome = 'Bonfiglioli'; 
var nomeCompleto = nome + sobrenome; //podemos somar strings

let idade = 19; // let pode ser alterada (number)
var cestas = 13342;
var frase = 'Michael Jordan fez ' + cestas + ' arremessos bem sucedidos'; //string e numeros podem ser somados

var ano = '2022';
var mes = 8;
var data = ano + mes; //não conseguimos somar numeros que estão em strings

const possuiFaculdade = true; // const não pode ser alterada (boolean)

var time; // undefined porque não há um valor atribuído
var comida = null; // null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object



//********** DECLARAR ***********//
console.log(nome, sobrenome); //-> é necessário declarar a variável anteriormente
console.log(nomeCompleto);
console.log(idade);
console.log(frase);

//********* ASPAS DUPLAS, SIMPLES E TEMPLATE STRING **********//
'javascript é "super" fácil'
"javascript é 'super' fácil"
"javascript é \"super\" fácil"
//`JavaScript é "super" fácil"`;
//"javascript é "super" fácil"; //inválido