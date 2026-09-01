function analisarPC() {

    // 1. Pegamos tudo que a pessoa digitou
    const cpuDigitada = document.getElementById("cpu").value;
    const gpuDigitada = document.getElementById("gpu").value;
    const ram = Number(document.getElementById("ram").value);
    const storage = document.getElementById("storage").value;
    const fonte = document.getElementById("fonte").value;
    const preco = Number(document.getElementById("preco").value);

    // 2. Procuramos CPU e GPU na nossa base
    const cpuEncontrada = procurarComponente(
        cpuDigitada,
        processadores
    );

    const gpuEncontrada = procurarComponente(
        gpuDigitada,
        placasVideo
    );

    let analiseCPU = "";
    let analiseGPU = "";
    let analiseRAM = "";
    let analiseFonte = "";

    // 3. ANALISAR PROCESSADOR

    if (cpuEncontrada) {

        analiseCPU = `
            <h3>Processador</h3>

            <p><strong>${cpuEncontrada.nome}</strong></p>

            <p>
                ${cpuEncontrada.nucleos} núcleos /
                ${cpuEncontrada.threads} threads
            </p>

            <p>
                Plataforma: ${cpuEncontrada.plataforma}
            </p>

            <p>
                Categoria: ${cpuEncontrada.categoria}
            </p>

            <p>
                Desempenho: ${cpuEncontrada.desempenho}/100
            </p>
        `;

    } else {

        analiseCPU = `
            <h3>Processador</h3>

            <p>
                ⚠️ Não encontramos
                "${cpuDigitada}"
                na nossa base ainda.
            </p>
        `;
    }


    // 4. ANALISAR PLACA DE VÍDEO

    if (gpuEncontrada) {

        analiseGPU = `
            <h3>Placa de vídeo</h3>

            <p><strong>${gpuEncontrada.nome}</strong></p>

            <p>
                Memória: ${gpuEncontrada.memoria}
            </p>

            <p>
                Categoria: ${gpuEncontrada.categoria}
            </p>

            <p>
                Desempenho: ${gpuEncontrada.desempenho}/100
            </p>
        `;

    } else {

        analiseGPU = `
            <h3>Placa de vídeo</h3>

            <p>
                ⚠️ Não encontramos
                "${gpuDigitada}"
                na nossa base ainda.
            </p>
        `;
    }


    // 5. ANALISAR RAM

    if (!ram) {

        analiseRAM = "⚠️ Informe a quantidade de RAM.";

    } else if (ram < 8) {

        analiseRAM =
            "🔴 Quantidade de RAM muito limitada.";

    } else if (ram < 16) {

        analiseRAM =
            "🟡 RAM suficiente para uso básico, mas limitada para tarefas mais pesadas.";

    } else if (ram < 32) {

        analiseRAM =
            "🟢 Boa quantidade de RAM para a maioria dos usuários.";

    } else {

        analiseRAM =
            "🟢 Excelente quantidade de RAM.";
    }


    // 6. ANALISAR FONTE

    if (!fonte) {

        analiseFonte =
            "🔴 Fonte não informada. Verifique marca e modelo antes da compra.";

    } else if (/^\s*\d+\s*w?\s*$/i.test(fonte)) {

        analiseFonte =
            "🟡 Você informou apenas a potência. Descubra a marca e o modelo exatos da fonte.";

    } else {

        analiseFonte =
            "🟢 Modelo de fonte informado. Ainda será necessário verificar qualidade e potência.";
    }


    // 7. CALCULAR UMA PONTUAÇÃO INICIAL

    let pontuacao = 0;
    let itensPontuados = 0;

    if (cpuEncontrada) {
        pontuacao += cpuEncontrada.desempenho;
        itensPontuados++;
    }

    if (gpuEncontrada) {
        pontuacao += gpuEncontrada.desempenho;
        itensPontuados++;
    }

    if (ram) {

        let notaRAM = 0;

        if (ram >= 32) {
            notaRAM = 90;
        } else if (ram >= 16) {
            notaRAM = 75;
        } else if (ram >= 8) {
            notaRAM = 50;
        } else {
            notaRAM = 20;
        }

        pontuacao += notaRAM;
        itensPontuados++;
    }

    const notaFinal = itensPontuados
        ? Math.round(pontuacao / itensPontuados)
        : 0;


    // 8. VEREDITO

    let veredito = "";

    if (notaFinal >= 75) {

        veredito = "🟢 BOM CONJUNTO";

    } else if (notaFinal >= 50) {

        veredito = "🟡 CONJUNTO RAZOÁVEL";

    } else {

        veredito = "🔴 CONJUNTO LIMITADO";
    }


    // 9. MOSTRAR RESULTADO

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `

        <h2>${veredito}</h2>

        <h1>${notaFinal}/100</h1>

        <p>
            Esta é uma pontuação técnica inicial do conjunto.
        </p>

        <hr>

        ${analiseCPU}

        <hr>

        ${analiseGPU}

        <hr>

        <h3>Memória RAM</h3>
        <p>${ram || "Não informada"} GB</p>
        <p>${analiseRAM}</p>

        <hr>

        <h3>Armazenamento</h3>
        <p>${storage || "Não informado"}</p>

        <hr>

        <h3>Fonte</h3>
        <p>${fonte || "Não informada"}</p>
        <p>${analiseFonte}</p>

        <hr>

        <h3>Preço anunciado</h3>

        <p>
            ${
                preco
                ? "R$ " + preco.toLocaleString("pt-BR")
                : "Não informado"
            }
        </p>

    `;

    resultado.style.display = "block";
}
