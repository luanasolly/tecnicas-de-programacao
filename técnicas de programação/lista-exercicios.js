let weight = 1.70;
// é uma variável do tipo float

var carBrand = 'mustang';
var year = 2008;
let km = 10.480;
const color = 'preto';
var isSubscribed = true;

let car = {
  carBrand: 'mustang',
  year: 2008,
  km: 10.480,
  color: 'preto',
  isSubscribed: true,
} // é um objeto

console.log('O carro ' + carBrand + ' selecionado possui a cor ' + color + ' e é do ano ' + year);

var cars = [carBrand, year, km, color, isSubscribed]
console.log(cars[0])

var primeiro = cars.shift()
var adicionar = cars.unshift('fusca')

console.log(cars);

console.log(a);
var a = 1; //undefined porque foi declarado depois