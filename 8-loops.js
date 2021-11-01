console.log(`Trabalhando com condicionais while`);

const listaDeDestinos = new Array(
  `salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log(`\nDestinos Possiveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || idadeComprador == true;
  

let contador = 0
let destinoExiste = false;
while(contador<3){
  if(listaDeDestinos [contador] == destino){
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  contador +=1;
}

console.log("\nDestino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
  console.log("\nBoa Viagem");
}else {
  console.log("Destino não existe");
}

for(let i = 0 ; i <3 ; i++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
  }
}
