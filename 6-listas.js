console.log(`Trabalhando com listas`);

// const salvador = `Salvador`; 
// const saPaulo = `São Paulo`; 
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
  `salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  );

listaDeDestinos.push(`Curitiba`); // PUSH adicioona um item novo a lista.

console.log(`Destinos Possiveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1) // SPLICE Remove o item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); // Entre Conchete você diz qual é a posição da lista que quer demonstrar.


//console.log(`salvador`, `saPaulo`, `rioDeJaneiro`);


//listaDeDestinos = 2;