console.log("Olá, Mundo! ");

// material 16 - página 07

/* constante - valor não varia */
const nomeLoja = "Minha Loja Online";

/* let -> variáveis - valor pode ser alterado */
let produto1 = "Smartphone";
let preco1 = 1500;
let emPromocao = true;

// nomeLoja = "Loja Grande"; -ERRO: Não posso alterar o valor de uma CONSTANTE
console.log(`Nome da loja: ${nomeLoja}`);
document.getElementById("nomeLoja").textContent = nomeLoja;
produto1 = "Samsung Galaxy S26"; // alterei o valor da variável
let promoMsg;
if (emPromocao) {
  promoMsg = "Em Promoção";
} else {
  promoMsg = "Fora da Promoção";
}
console.log(
  `Produto: ${produto1} | Preço: R$ ${preco1.toFixed(2)} | ${promoMsg}`,
);

// material 16 - página 08

// Operadores aritméticos
console.log("--- Operadores Aritméticos ---");
const preco = 299.9;
const desconto = 0.15; // 15%
console.log(`Preço inicial: R$ ${preco} | Percentual de desconto: ${desconto}`);

// Calculando o preço final
const valorDesconto = preco * desconto; // 44.985
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);

const precoFinal = preco - valorDesconto; // 254.915
console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);

const frete = 19.9;
console.log(`Frete: R$ ${frete.toFixed(2)}`);
const total = precoFinal + frete; // 274.815
console.log(`Total: R$ ${total.toFixed(2)}`);

// Relacionais e Lógicos
console.log("--- Operadores Relacionais e Lógicos ---");
const estoque2 = 15;
const emPromocao2 = true;
const precoFinal2 = 254.9;

// Relacionais: ==, !=, >, <, >=, <=
console.log(estoque2 > 0); // true
console.log(precoFinal2 <= 300); // true

// Lógicos: && (e), || (ou), ! (não)
console.log(estoque2 > 0 && emPromocao2); // (true && true) -> true
console.log(estoque2 === 0 || emPromocao2); // (false || true) -> true
console.log(!emPromocao2); // (!true) -> false

// material 16 - página 11

// - for listando produtos
// Vetor (Array)
const produtos = [
  "Tênis Running Pro",
  "Mochila Sport",
  "Camiseta Dry-Fit",
  "Meias Esportivas",
];
for (let i = 0; i < produtos.length; i++) {
  console.log(`${i + 1}. ${produtos[i]}`);
}

// Saída:
// 1. Tênis Running Pro
// 2. Mochila Sport
// 3. Camiseta Dry-Fit
// 4. Meias Esportivas

// - while controlando estoque
let estoque = 5;
let vendas = 0;
while (estoque > 0) {
  console.log(`Venda realizada! Estoque restante: ${estoque - 1}`);
  estoque--;
  vendas++;
}
console.log(`Total de vendas: ${vendas}`); // Total de vendas: 5

// material 16 - página 12
// for - listando produtos
// produtos2 -> vetor de objetos
const produtos2 = [
  { nome: "Smartphone", preco: 1500 },
  { nome: "Camiseta", preco: 80 },
  { nome: "Relógio", preco: 250 },
];
for (let i = 0; i < produtos2.length; i++) {
  console.log(`Produto: ${produtos2[i].nome} - R$ ${produtos2[i].preco}`);
}

// material 16 - página 14
// FUNÇÕES

// Declaração de Função
function calcularDesconto(preco, percentual) {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

// chamando a função calcularDesconto, passando o preco e o percentual
const final = calcularDesconto(299.9, 15);
console.log(`R$ ${final.toFixed(2)}`); // R$ 254.92;

const final2 = calcularDesconto(1000, 10);
console.log(`R$ ${final2.toFixed(2)}`); // R$ 900.00;
