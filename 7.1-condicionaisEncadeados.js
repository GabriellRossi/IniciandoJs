console.log(`Trabalhando com condicionais encadeados`);

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

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem");
  listaDeDestinos.splice(2, 1); // Removendo item da lista
} else {
  console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");

} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);