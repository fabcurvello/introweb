// GABARITO Atividade Revisão JS e TS

console.log("Sistema escolar iniciado!");

// Etapa 1: Declarar variáveis de alunos (Array de objetos usando const)
const alunos = [
  { nome: "Ana Silva", nota: 7.5, bolsista: true },
  { nome: "Carlos Eduardo", nota: 5.0, bolsista: false },
  { nome: "Beatriz Souza", nota: 8.5, bolsista: true },
];

// Etapa 2: Função para calcular nota com bônus
function adicionarBonus(nota, bonus) {
  // O return encerra a função e devolve o valor somado
  return nota + bonus;
}

// Etapa 3: Condicionais e Template Strings
let notaFinal;

// Pegando o primeiro aluno (índice 0) como exemplo
if (alunos[0].bolsista === true) {
  // '===' compara valor e tipo com segurança
  notaFinal = adicionarBonus(alunos[0].nota, 1.5);
} else {
  notaFinal = alunos[0].nota;
}

// Imprimindo o resultado com Template Strings (suporta múltiplas linhas)
console.log(`Análise do Aluno 1: ${alunos[0].nome} 
    Nota original: ${alunos[0].nota} 
    Nota final (com bônus aplicado, se houver): ${notaFinal}`);

// Etapa 4: Laços de Repetição para listar todos os alunos
console.log("--- BOLETIM GERAL ---");

for (let cont = 0; cont < alunos.length; cont++) {
  console.log(`Aluno(a): ${alunos[cont].nome} | Nota: ${alunos[cont].nota}`);
}
