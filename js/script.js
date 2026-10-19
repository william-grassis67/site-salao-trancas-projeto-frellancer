/* ====== DADOS EDITÁVEIS ======
   Troque o número do WhatsApp (somente dígitos, com 55 + DDD).
   Exemplo: "5527999999999". Enquanto estiver vazio, o botão abre
   o WhatsApp para escolher o contato. */
const CONFIG = {
  whatsapp: "5527997695159",
  mensagem: "Olá! Vim pelo site e quero agendar nagô natural.",
  precos: [
    { qtd: "Até 30 tranças",      valor: 50 },
    { qtd: "31 a 50 tranças",     valor: 70 },
    { qtd: "51 a 70 tranças",     valor: 90 },
    { qtd: "71 a 90 tranças",     valor: 110 },
    { qtd: "Acima de 90 tranças", valor: 130 }
  ]
};

/* WhatsApp */
const numero = CONFIG.whatsapp.replace(/\D/g, "");
const linkZap = "https://wa.me/" + numero + "?text=" + encodeURIComponent(CONFIG.mensagem);
document.querySelectorAll("[data-whatsapp]").forEach(a => {
  a.href = linkZap;
  a.target = "_blank";
  a.rel = "noopener";
});

/* Tabela de preços */
const lista = document.getElementById("tabela-precos");
CONFIG.precos.forEach(p => {
  const li = document.createElement("li");
  const valor = p.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  li.innerHTML = '<span class="qtd"></span><span class="pontos" aria-hidden="true"></span>' +
                 '<span class="valor"><small>R$</small>' + valor + '</span>';
  li.querySelector(".qtd").textContent = p.qtd;
  lista.appendChild(li);
});

/* Galeria com ampliação */
const box = document.getElementById("lightbox");
const boxImg = document.getElementById("lightbox-img");
document.querySelectorAll("#galeria .foto").forEach(btn => {
  btn.addEventListener("click", () => {
    boxImg.src = btn.dataset.src;
    boxImg.alt = btn.dataset.alt;
    box.showModal();
  });
});
document.getElementById("fechar").addEventListener("click", () => box.close());
box.addEventListener("click", e => { if (e.target === box) box.close(); });

/* Navegação mobile */
const topo = document.querySelector(".topo");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu-principal");
const fecharMenu = () => {
  topo.classList.remove("menu-aberto");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
};
menuToggle.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
  topo.classList.toggle("menu-aberto", !aberto);
});
menu.addEventListener("click", e => { if (e.target.closest("a")) fecharMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharMenu(); });

/* Estado compacto do cabeçalho e entradas ao rolar */
const atualizarTopo = () => topo.classList.toggle("com-scroll", window.scrollY > 24);
atualizarTopo();
window.addEventListener("scroll", atualizarTopo, { passive: true });

const elementosAnimados = document.querySelectorAll(
  ".secao .miolo > h2, .secao .miolo > p, .tabela li, .foto, .info div, .secao .botao"
);
elementosAnimados.forEach((elemento, indice) => {
  elemento.dataset.reveal = "";
  const anteriores = [...elementosAnimados].slice(0, indice).filter(item => item.parentElement === elemento.parentElement).length;
  elemento.style.setProperty("--reveal-delay", `${Math.min(anteriores * 90, 270)}ms`);
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-animacoes");
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
  elementosAnimados.forEach(elemento => observador.observe(elemento));
} else {
  elementosAnimados.forEach(elemento => elemento.classList.add("visivel"));
}

document.getElementById("ano").textContent = new Date().getFullYear();
