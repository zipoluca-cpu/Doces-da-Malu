// Mensagem de boas-vindas no console
console.log("Doces da Malu - Site carregado!");

// Animação simples dos cards quando aparecem na tela
const cards = document.querySelectorAll(".card-doce");

const observer = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// Mensagem personalizada para os botões de encomenda
const botoesEncomenda = document.querySelectorAll(
    ".card-conteudo a"
);

botoesEncomenda.forEach((botao) => {

    botao.addEventListener("click", () => {

        console.log(
            "Cliente direcionado para o WhatsApp da Doces da Malu."
        );

    });

});
