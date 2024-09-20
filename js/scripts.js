let bubleArr = [];

document.addEventListener("mousemove", (e) => {
    let bubles = document.createElement("bubles");
    let x = e.pageX;
    let y = e.pageY;
    let size = Math.random() * 60;

    bubles.style.width = 1 + size + "px";
    bubles.style.height = 1 + size + "px";
    bubles.style.left = x - size / 2 + "px";
    bubles.style.top = y - size / 2 + "px";

    document.body.appendChild(bubles);

    setTimeout(function () {
        bubles.remove();
        console.log("tu sam");
    }, 5000);
});

let isTranslated = false;

const translations = {
    "main .main-content .text h2:nth-of-type(1)": {
        "pt": "Sobre mim",
        "en": "About me"
    },
    "main .main-content .text p": {
        "pt": `Profissional formado em Ciência da Computação, com sólidos conhecimentos em Python e seus frameworks Django e Flask.<br>
        Experiência em desenvolvimento web (HTML, CSS, JavaScript, Bootstrap), criação e integração de APIs RESTful.<br>
        Domínio em SQL para gerenciamento de dados e Git e GitHub para controle de versionamento e colaboração em projetos de software.<br>
        Habilidades em suporte a redes e infraestrutura de TI.<br>
        Em busca de novos desafios para aplicar e expandir meus conhecimentos em desenvolvimento de software.`,
        "en": `Professional with a degree in Computer Science, possessing solid knowledge in Python and its frameworks Django and Flask.<br>
        Experience in web development (HTML, CSS, JavaScript, Bootstrap), creation and integration of RESTful APIs.<br>
        Proficient in SQL for data management and Git and GitHub for version control and collaboration on software projects.<br>
        Skills in network support and IT infrastructure.<br>
        Seeking new challenges to apply and expand my knowledge in software development.`
    },
    "main .main-content .techs h2": {
        "pt": "Tecnologias",
        "en": "Technologies"
    },
    "footer span": {
        "pt": "&copy; Tiago Silva Peixoto, 2024 - Todos os direitos reservados",
        "en": "&copy; Tiago Silva Peixoto, 2024 - All rights reserved"
    }
};

function toggleTranslation() {
    isTranslated = !isTranslated;

    // Atualiza os textos com base na tradução
    for (const selector in translations) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = isTranslated ? translations[selector].en : translations[selector].pt;
        } else {
            console.warn(`Elemento não encontrado: ${selector}`);
        }
    }

    // Atualiza o texto do botão
    const button = document.getElementById("botaoTraduzir");
    button.textContent = isTranslated ? "Translate to Portuguese" : "Traduzir para Inglês";
}