// 1. Estes são os dados brutos recebidos de uma 'API' de músicas.
// Note que estão no formato JSON (JavaScript Object Notation).
const dadosRecebidosJSON = `[
    { "id": 1, "titulo": "Blinding Lights", "artista": "The Weeknd", "genero": "Pop" },
    { "id": 2, "titulo": "Smells Like Teen Spirit", "artista": "Nirvana", "genero": "Rock" },
    { "id": 3, "titulo": "Levitating", "artista": "Dua Lipa", "genero": "Pop" } 
]`;

// A partir daqui, siga o passo a passo da atividade!

// ETAPA 1 - Preparando os Dados (JSON)
const minhaPlaylist = JSON.parse(dadosRecebidosJSON); // conversão de JSON para JS
console.log("--- Etapa 1: Playlist Original ---");
console.log(minhaPlaylist);


// ETAPA 2 - Adicionando Músicas (Spread Operator)
const playlistAtualizada = [
    ...minhaPlaylist,
    {id: 4, titulo: "Oceano", artista: "Djavan", genero: "MPB"},
];

console.log("--- Etapa 2: Adicionando Músicas (Spread Operator) ---");
console.log(playlistAtualizada);


// ETAPA 3 - Extraindo Dados com Elegância (Destructuring)

const { titulo, artista } = playlistAtualizada[0];
console.log("--- Etapa 3: Extraindo Dados com Elegância (Destructuring) ---");
console.log(`Tocando agora: ${titulo} do artista ${artista}`);


// ETAPA 4 - Remixando uma Música (Spread em Objetos)

const musicaRemix = {
    ...playlistAtualizada[1],
    genero: "Eletrônica", // Sobrescreve a propriedade existente
    versao: "Remix", // Cria uma nova propriedade
};
console.log("--- Etapa 4: Remixando uma Música (Spread em Objetos) ---");
console.log(musicaRemix);


// ETAPA 5 - Funções de Catálogo (Listar e Filtrar)

// 5.1 - Função que lista todas as músicas
function listarMusicas(lista) {
    console.log("\n--- Etapa 5: Listando Todas as Músicas ---");
    lista.forEach((musica) => {
        console.log(`Música: ${musica.titulo} - Artista: ${musica.artista}`);
    });
}

// 5.2 - Função quer filtra por gênero
function filtrarPorGenero(lista, generoBuscado) {
    return lista.filter((musica) => musica.genero === generoBuscado);
}

// 5.3 - Executando as funções
// chamada da função da atividade 5.1
listarMusicas(playlistAtualizada); 

//executando a função da atividade 5.2
const MusicasPop = filtrarPorGenero(playlistAtualizada, "Pop");
console.log("\n--- Etapa 5: Filtrando músicas Pop ---");
console.log(MusicasPop);


