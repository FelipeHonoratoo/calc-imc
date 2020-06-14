let niveis = ["Magreza",
              "Normal",
              "Sobrepeso",
              "Obesidade",
              "Obesidade Grave"];

function calcularIMC(massa,altura) {
  
  let imc = massa / (altura**2);
  
  return imc;
}

let pessoas = ["Felipe", "José", "Igor", "Carlos"];
let massas = [78, 85, 70, 89];
let alturas = [1.76, 1.69, 1.59, 1.63];

function verificaNivel(imc) {
  let nivel = 0;

  if(imc < 18.5) {
    nivel = 0;
  } else if(imc < 25) {
    nivel = 1;
  } else if(imc < 30) {
    nivel = 2;
  } else if(imc < 40) {
    nivel = 3;
  } else {
    nivel = 4;
  }
  return nivel;
}

for(let indice = 0;indice < pessoas.length;indice++) {

let pessoa = pessoas[indice];
let massa = massas[indice];
let altura = alturas[indice];

let imc = calcularIMC(massa,altura);
let nivel = verificaNivel(imc);

console.log("Nome:"+pessoa);
console.log("Peso:"+massa);
console.log("Altura:"+altura);
console.log("IMC:"+imc.toFixed(2));
console.log("Classificação:"+niveis[nivel]);
console.log("");
}
