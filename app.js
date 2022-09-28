(function(){
    const quotes = [
        {
            quote: "Eu gosto da forma como o céu sabe lidar com o fim, talvez seja por isso que eu goste mais dele do que de mim, ainda estou preso à despedidas não ditas, nunca consegui fazer as pazes com o que não aconteceu.",
            author: "Edu Fernandes"
        },
        {
            quote: "Ás vezes vencer significa apenas conseguir levantar da cama mais um dia, olhar o sol nascer e se pôr mais uma vez, gosto de olhar para o céu e imaginar o infinito mesmo que eu não ache muitas razões pra estar aqui.",
            author: "Edu Fernandes"
        },
        {
            quote: "Eu sei que ainda posso ter uma vida boa, mesmo depois de longos dias ruins enxergar na beleza dos meus curtos passos um motivo para acreditar que estou no caminho certo evoluindo aos poucos, sem ser tão cruel com as coisas que vivi e falhas que acumulei.",
            author: "Edu Fernandes"
        },
        {
            quote: "Todos conhecem alguém como você, todos querem conhecer alguém como você inesquecível, estremece o mundo por onde passa, estremeceu meu mundo quando passou aqui vestindo o seu melhor sorriso varrendo como podia os traumas que implantaram no seu peito casando-se com a felicidade, mesmo que a tristeza fosse sua amante às vezes eu nunca vou esquecer do seu olhar.",
            author: "Edu Fernandes"
        },
        {
            quote: "Tenho acordado todas as manhãs e regado algumas sementes que plantei lá atrás tenho tirado a poeira da caixa de memórias e visitado recordações felizes sempre que inauguro a morte de um futuro triste estou trocando a desistência pelo descanso deitando no sofá e me embrulhado com memórias felizes eu moro numa casa em que telhados não existem.",
            author: "Edu Fernandes"
        },
        {
            quote: "Eu sei que nossos vazios se encontraram nessa pausa que fazemos pra procurar o que perdemos da vida dentro dessa imensidão que chamamos de olhar essa vastidão espaço-tempo que me prende no tempo e me faz esquecer do espaço da realidade e de uma vida presa pelo tédio da solidão uma solidão que sempre me acompanhou como uma marca de nascença feita no meu destino antes que eu pudesse evitar.",
            author: "Edu Fernandes"
        }
    ];

const btn = document.getElementById('generate-btn');
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    document.getElementById('quote').textContent = quotes[random].quote;
})
})();