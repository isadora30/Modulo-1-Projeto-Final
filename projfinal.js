let sequenciaRespostas = [
    ["3", "2", "2"], // Facção Franqueza
    ["1", "3", "1"], // Facção Abnegação
    ["2", "1", "3"]  // Facção Audácia
]

function faccoes(personagem) {
    if (personagem === "Franqueza") {
        return 0
    }
    if (personagem === "Abnegacao") {
        return 1
    }
    if (personagem === "Audacia") {
        return 2
    }
}

function responder(fase, personagem) {
    let resposta = prompt("Digite a resposta certa")

    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("Resposta invalida!)
        resposta = prompt("Digite a resposta correta:")
    }