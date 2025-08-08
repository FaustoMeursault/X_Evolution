const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é uma criatura primitiva no início da evolução. Você precisa escolher seu ambiente para sobreviver. Onde você vai viver?",
        alternativas: [
            {
                texto: "Escolho viver na água, onde posso me esconder e evoluir para nadar.",
                afirmacao: "Você evolui nadadeiras e respiração aquática, se adaptando ao ambiente aquático."
            },
            {
                texto: "Escolho sair para a terra, onde a exploração de novos recursos é possível.",
                afirmacao: "Você desenvolve pulmões e membros para caminhar, iniciando sua adaptação à terra firme."
            }
        ]
    },
    {
        enunciado: "Com o tempo, você percebe que precisa se proteger de predadores. O que você escolhe para sua defesa?",
        alternativas: [
            {
                texto: "Decido criar uma carapaça dura, para me proteger de ataques.",
                afirmacao: "Sua evolução favoreceu o desenvolvimento de uma armadura natural, protegendo-o de predadores."
            },
            {
                texto: "Escolho criar chifres para atacar e defender-me melhor.",
                afirmacao: "Você agora possui chifres poderosos que ajudam a se defender e a competir com outros por território."
            }
        ]
    },
    {
        enunciado: "A necessidade de se alimentar está cada vez mais presente. Como você vai caçar ou coletar comida?",
        alternativas: [
            {
                texto: "Desenvolvo habilidades para caçar peixes, aproveitando minha vida aquática.",
                afirmacao: "Você aperfeiçoa suas habilidades de caça subaquática, tornando-se um predador formidável no oceano."
            },
            {
                texto: "Decido desenvolver habilidades para buscar comida na terra, como raízes e frutos.",
                afirmacao: "Você começa a explorar a terra em busca de alimento, aprendendo a identificar fontes de comida e recursos naturais."
            }
        ]
    },
    {
        enunciado: "O ambiente está mudando. Agora é necessário tomar uma decisão importante. O que você faz?",
        alternativas: [
            {
                texto: "Decido migrar para um novo habitat, em busca de melhores condições.",
                afirmacao: "Sua migração o levou a um novo ambiente, onde novas oportunidades de adaptação surgem."
            },
            {
                texto: "Fico no meu habitat atual, tentando me adaptar às novas condições de vida.",
                afirmacao: "Você se adapta gradualmente às novas condições, desenvolvendo novas habilidades para sobreviver."
            }
        ]
    },
    {
        enunciado: "Sua espécie agora está em um ponto crucial de evolução. O que você faz para garantir a sobrevivência futura?",
        alternativas: [
            {
                texto: "Decido evoluir para uma forma mais inteligente, com maior capacidade de comunicação e uso de ferramentas.",
                afirmacao: "Você começa a desenvolver habilidades cognitivas avançadas, usando ferramentas para melhorar a sua sobrevivência."
            },
            {
                texto: "Decido focar na adaptação física, tornando-me ainda mais forte e rápido.",
                afirmacao: "Sua espécie se torna fisicamente mais dominante, com grande força e velocidade para caçar e sobreviver."
            }
        ]
    },
];

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Sua jornada evolutiva chegou ao fim. O que você se tornou?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
