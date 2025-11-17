// ---------- SCROLL SUAVE PARA LINKS DO MENU ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ---------- BOTÃO VOLTAR AO TOPO ----------
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ---------- VALIDAÇÃO DO FORMULÁRIO ----------
const form = document.getElementById("contato-form");
const mensagemStatus = document.getElementById("mensagem-status");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio automático

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    let erros = [];

    // Validações básicas
    if (nome.length < 3) {
        erros.push("O nome deve ter pelo menos 3 caracteres.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        erros.push("Digite um e-mail válido.");
    }

    if (mensagem.length < 10) {
        erros.push("A mensagem deve ter pelo menos 10 caracteres.");
    }

    // Exibe erros
    if (erros.length > 0) {
        mensagemStatus.textContent = erros.join(" ");
        mensagemStatus.className = "erro";
        return;
    }

    // Se passou em tudo:
    mensagemStatus.textContent = "Mensagem enviada com sucesso! ✔";
    mensagemStatus.className = "sucesso";

    // Limpa campos
    form.reset();

    // Remove mensagem depois de alguns segundos
    setTimeout(() => {
        mensagemStatus.textContent = "";
        mensagemStatus.className = "";
    }, 3000);
});
