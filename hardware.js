const processadores = [
    {
        nomes: ["i5-3330", "i5 3330", "intel i5 3330"],
        nome: "Intel Core i5-3330",
        ano: 2012,
        nucleos: 4,
        threads: 4,
        plataforma: "LGA 1155",
        desempenho: 30,
        longevidade: 20,
        categoria: "Básico / antigo"
    },

    {
        nomes: ["ryzen 5 5600", "r5 5600", "5600"],
        nome: "AMD Ryzen 5 5600",
        ano: 2022,
        nucleos: 6,
        threads: 12,
        plataforma: "AM4",
        desempenho: 75,
        longevidade: 65,
        categoria: "Intermediário"
    }
];


const placasVideo = [
    {
        nomes: ["gtx 1650", "1650", "geforce gtx 1650"],
        nome: "NVIDIA GeForce GTX 1650",
        memoria: "4 GB",
        desempenho: 42,
        categoria: "Entrada"
    },

    {
        nomes: ["rtx 4060", "4060", "geforce rtx 4060"],
        nome: "NVIDIA GeForce RTX 4060",
        memoria: "8 GB",
        desempenho: 78,
        categoria: "Intermediária"
    }
];


function procurarComponente(texto, lista) {

    const pesquisa = texto
        .toLowerCase()
        .trim();

    return lista.find(componente =>
        componente.nomes.some(nome =>
            pesquisa.includes(nome)
        )
    );
}
