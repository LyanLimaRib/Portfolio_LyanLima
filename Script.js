// 1) Barras de habilidades: enchem quando aparecem na tela
const skills = document.querySelectorAll(".skill");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;
    const skill = entrada.target;
    const valor = Number(skill.dataset.valor);
    skill.querySelector(".progress-bar").style.width = valor + "%";
    skill.querySelector(".progress").setAttribute("aria-valuenow", valor);
    contar(skill.querySelector(".pct"), valor);
    observador.unobserve(skill); // anima só uma vez
  });
}, { threshold: 0.4 });

skills.forEach((skill) => observador.observe(skill));

function contar(elemento, alvo) {
  let atual = 0;
  const passo = setInterval(() => {
    atual += 1;
    elemento.textContent = atual + "%";
    if (atual >= alvo) clearInterval(passo);
  }, 1400 / alvo);
}

// 2) Filtro de projetos por categoria
const botoes = document.querySelectorAll(".btn-filtro");
const projetos = document.querySelectorAll(".projeto");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoes.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    const filtro = botao.dataset.filtro;
    projetos.forEach((p) => {
      p.classList.toggle("oculto", filtro !== "todos" && p.dataset.categoria !== filtro);
    });
  });
});

// 3) Validação do formulário de contato (Bootstrap)
const form = document.getElementById("form-contato");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  form.classList.add("was-validated");
  if (!form.checkValidity()) return;

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const assunto = encodeURIComponent("Contato pelo portfólio - " + nome);
  const corpo = encodeURIComponent(mensagem + "\n\n" + nome + " (" + email + ")");
  window.location.href = "mailto:lyanaparecido.rib000@gmail.com?subject=" + assunto + "&body=" + corpo;
});