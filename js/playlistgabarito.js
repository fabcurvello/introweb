// 1. Estes são os dados brutos recebidos de uma 'API' de músicas.
// Note que estão no formato JSON (JavaScript Object Notation).
const dadosRecebidosJSON = `[
    { "id": 1, "titulo": "Blinding Lights", "artista": "The Weeknd", "genero": "Pop" },
    { "id": 2, "titulo": "Smells Like Teen Spirit", "artista": "Nirvana", "genero": "Rock" },
    { "id": 3, "titulo": "Levitating", "artista": "Dua Lipa", "genero": "Pop" }
]`;

// A partir daqui, siga o passo a passo da atividade!

// ==========================================
// ETAPA 1: Preparando os Dados (JSON)
// ==========================================
const minhaPlaylist = JSON.parse(dadosRecebidosJSON);
console.log("--- Etapa 1: Playlist Original ---");
console.log(minhaPlaylist);


// ==========================================
// ETAPA 2: Adicionando Músicas (Spread Operator em Arrays)
// ==========================================
const playlistAtualizada = [
  ...minhaPlaylist,
  { id: 4, titulo: "Oceano", artista: "Djavan", genero: "MPB" },
];
console.log("\n--- Etapa 2: Playlist Atualizada (com nova música) ---");
console.log(playlistAtualizada);


// ==========================================
// ETAPA 3: Extraindo Dados (Destructuring)
// ==========================================
const { titulo, artista } = playlistAtualizada[0]; 
console.log("\n--- Etapa 3: Destructuring ---");
console.log(`Tocando agora: ${titulo} do artista ${artista}`);


// ==========================================
// ETAPA 4: Remixando (Spread em Objetos)
// ==========================================
const musicaRemix = {
  ...playlistAtualizada[1], // Copia a música do Nirvana 
  genero: "Eletrônica", // Sobrescreve a propriedade existente 
  versao: "Remix", // Cria uma nova propriedade 
};
console.log("\n--- Etapa 4: Música Remixada (sem alterar a original) ---");
console.log(musicaRemix);
// Pode-se pedir para dar log em playlistAtualizada[11] para provar que a original ficou intacta


// ==========================================
// ETAPA 5: Funções de Catálogo (Listar e Filtrar)
// ==========================================

// 5.1 - Função que lista todas as músicas 
function listarMusicas(lista) {
  console.log("\n--- Etapa 5: Listando Todas as Músicas ---");
  lista.forEach((musica) => {
    console.log(`Música: ${musica.titulo} - Artista: ${musica.artista}`);
  });
}

// 5.2 - Função que filtra por gênero específico 
function filtrarPorGenero(lista, generoBuscado) {
  return lista.filter((musica) => musica.genero === generoBuscado);
}

// 5.3 - Executando as funções
listarMusicas(playlistAtualizada);

const musicasPop = filtrarPorGenero(playlistAtualizada, "Pop");
console.log("\n--- Etapa 5: Filtrando músicas Pop ---");
console.log(musicasPop);
