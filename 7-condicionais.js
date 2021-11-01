console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos Possiveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1) // SPLICE Remove o item da lista

} else if (estaAcompanhada == true) {
  console.log("Comprador está acompanhada");
  listaDeDestinos.splice(1, 1); // SPLICE Remove o item lista

} else {
  console.log("Não é maior de idade e não posso vender");
}
console.log(listaDeDestinos);





  // console.log(idadeComprador >18);
  // console.log(idadeComprador <18);
  // console.log(idadeComprador >=18);
  // console.log(idadeComprador <=18);
  // console.log(idadeComprador ==18);