/* ===========================
      POPUP ORÇAMENTO
=========================== */

function openPopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'none';
}

window.onclick = function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
}


/* ===========================
      FAQ - ABRE E FECHA
=========================== */

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        if (answer) answer.classList.toggle("show");
    });
});


/* ===========================
      SIDEBAR MOBILE
=========================== */

function openSidebar() {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar) sidebar.classList.add("open");
}

function closeSidebar() {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar) sidebar.classList.remove("open");
}


/* ===========================
      FORMULÁRIO → WHATSAPP
=========================== */

const form = document.getElementById("whatsappForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto =
            `Olá, vim pelo site e gostaria de um orçamento.%0A%0A` +
            `📌 *Nome:* ${nome}%0A` +
            `📌 *Email:* ${email}%0A` +
            `📌 *Telefone:* ${telefone}%0A` +
            `📌 *Problema:* ${mensagem}`;

        const numeroWhatsApp = "5511955794394";

        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

        window.open(url, "_blank");

        closePopup(); // fecha popup automaticamente
    });
}

// ANIMAÇÃO SCROLL REVEAL CSS
function revealOnScroll() {
    let reveals = document.querySelectorAll("section, .faq-item, .footer, .map-container");

    reveals.forEach(el => {
        let rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
