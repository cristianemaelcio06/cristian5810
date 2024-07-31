const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após assistir a um jogo de futebol emocionante, você vê uma nova tecnologia que analisa cada jogada e dá estatísticas detalhadas. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Isso é ótimo! Vai ajudar muito na análise e no desempenho dos jogadores.",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso pode acabar tornando o jogo menos emocionante e mais técnico.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um treinador decide usar uma nova tecnologia de análise de desempenho dos jogadores. Ele pede para você escrever um relatório sobre o impacto dessa tecnologia no treinamento. Como você procede?",
        alternativas: [
            {
                texto: "Utiliza dados da tecnologia para criar gráficos e análises detalhadas sobre o impacto nos treinos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o relatório com base em observações diretas dos treinos e no feedback dos jogadores e treinadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre como a tecnologia pode mudar o futebol, você participa de um debate na escola. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia vai revolucionar o futebol, proporcionando melhores treinos e mais dados sobre os jogadores.",
                afirmacao: "afirmação"
            },
            {
                texto: "Estou preocupado com a possibilidade de a tecnologia diminuir a espontaneidade e a emoção dos jogos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a discussão, você precisa criar uma imagem que represente como a tecnologia pode transformar o futebol. O que você faz?",
        alternativas: [
            {
                texto: "Cria uma imagem mostrando jogadores analisando estatísticas em um tablet durante um treino.",
                afirmacao: "afirmação"
            },
            {
                texto: "Utiliza um gerador de imagens baseado em IA para criar uma visualização futurista dos jogos com tecnologia avançada.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo sobre as mudanças tecnológicas no futebol, mas uma pessoa do seu grupo decidiu usar um texto gerado por IA. O resultado está idêntico ao do gerador. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Aceito o texto gerado pela IA sem alterações, pois é uma maneira eficiente de completar o projeto.",
                afirmacao: "afirmação"
            },
            {
                texto: "Revisei o texto e adicionei informações e perspectivas pessoais para garantir que o trabalho seja original e bem fundamentado.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; // Limpar as alternativas anteriores
    for (const alternativa of perguntas[atual].alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                caixaPerguntas.textContent = "Obrigado por participar!";
                caixaAlternativas.innerHTML = ''; // Limpar alternativas ao final
            }
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Inicializa o quiz
mostraPergunta();
