function analisarPC() {

    // Pega as informações digitadas pelo usuário
    const cpu = document.getElementById("cpu").value;
    const gpu = document.getElementById("gpu").value;
    const ram = Number(document.getElementById("ram").value);
    const storage = document.getElementById("storage").value;
    const fonte = document.getElementById("fonte").value;
    const preco = Number(document.getElementById("preco").value);

    // Aqui guardaremos os avisos encontrados
    let alertas = [];

    // PROCESSADOR
    if (!cpu) {
        alertas.push("⚠️ Processador não informado.");
    }

    // PLACA DE VÍDEO
    if (!gpu) {
        alertas.push("⚠️ Placa de vídeo não informada.");
    }

    // MEMÓRIA RAM
    if (!ram) {

        alertas.push("⚠️ Memória RAM não informada.");

    } else if (ram < 8) {

        alertas.push(
            "🔴 Menos de 8 GB de RAM é muito limitado atualmente."
        );

    } else if (ram < 16) {

        alertas.push(
            "🟡 8 GB de RAM pode ser pouco para jogos e multitarefa."
        );

    } else {

        alertas.push(
            "🟢 Quantidade de RAM adequada para a maioria dos usuários."
        );
    }

    // FONTE
    if (!fonte) {

        alertas.push(
            "🔴 Fonte não informada. Descubra a marca e o modelo antes de comprar."
        );
    }

    // ARMAZENAMENTO
    if (!storage) {

        alertas.push(
            "🟡 Armazenamento não informado."
        );
    }

    // PREÇO
    if (!preco) {

        alertas.push(
            "⚠️ Informe o preço do computador."
        );
    }

    // MOSTRA O RESULTADO NA TELA

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h2>Análise inicial</h2>

        <p><strong>Processador:</strong> ${cpu || "Não informado"}</p>

        <p><strong>Placa de vídeo:</strong> ${gpu || "Não informado"}</p>

        <p><strong>Preço:</strong>
        ${preco ? "R$ " + preco : "Não informado"}
        </p>

        <hr>

        ${alertas.map(alerta =>
            `<p>${alerta}</p>`
        ).join("")}
    `;

    resultado.style.display = "block";
}
