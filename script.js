document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll(".progresso");
    barras.forEach(barra => {
      const largura = barra.getAttribute("data-width");
      setTimeout(() => {
        barra.style.width = largura;
      }, 300);
    });
  
    const botoesContato = document.querySelectorAll(".btn-contato");
    botoesContato.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("ativo");
      });
    });
  
    console.log("Site animado e carregado com sucesso!");
  });
  function toggleMenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
