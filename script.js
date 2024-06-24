const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
        {
            enunciado: "Por que tem poluição?",
            alternativas: [
                "o ser humano provoca poluição ambiental quando suas industrias, por exemplo lançam poluentes no ar",
                "a poluição não causa mau aos seres humanos "
            ]
        },
        {
            enunciado: "Como preservar árvores e floresta?",
            alternativas: [
                "reutizando metais e vidros ",
                "reciclando papeis, jornais e revistas "
            ]
        }
    ]; 
    {
        enunciado: "Derrubar árvores contribui para as cidades tornarem-se  mais quentes?",
        alternativas: [
            "verdadeiro",
            "falso"
        ]
        {
            enunciado: "O meio ambiente, bem de uso comum do povo, consistente no equilíbrio ecológico e na higidez do meio e dos recursos naturais, é bem?",
            alternativas: [
                "comum, geral, difuso, indivisível, indisponivel e impenhorável",
                "coletivo, divisível e indisponível "
            ]
            {
                enunciado: "Pergunta 5",
                alternativas: [
                    "Alternativa 1",
                    "Alternativa 2"
                ]
                let atual = 0;
                let perguntaAtual;

                }
                function mostraPergunta() {
                    perguntaAtual = perguntas[atual];
                    caixaPerguntas.textContent = perguntaAtual.enunciado;
                }
                
                mostraPergunta()

