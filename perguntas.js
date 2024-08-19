const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como seria viver em um mundo dominado por inteligencia virtual, tipo exterminador do futuro",
        alternativas: [
            {
                texto: "Isso é seria assustador?",
                afirmacao: ["Tentaria viver mesmo com a alta technologia dominando tudo e podendo morrer a qualquer momento. ",
                    "Ou. Tentaria matar a IA com algum tipo de virus mesmo que isso te mate, mas o planeta seria salvo."
                ]
            },
            {
                texto: "Viveria em guerra com a IA por sobrevivencia",
                afirmacao: ["Mas os alimentos são escasos e não a comida para todo os sobreviventes.",
                    "E suportar a saudade seria muito reduzido, pela falta de medicamentos, higiene e medicos."
                ]
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();