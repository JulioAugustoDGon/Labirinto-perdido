function voltatopo() {
    window.scrollTo(0, 0);
}
function preload(){
  musica = loadSound('Musica.mp3');
}

function setup() {
  musica.play();
  musica.loop();
}
const avança = document.querySelectorAll(".proxima");
avança.forEach(button => {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
        voltatopo();
})
})

console.log("VERSÃO GENÉRICA - PROFª GABI.")

console.log("O JavaScript já está funcional. Basta você alterar o conteúdo HTML com a sua história e escolhas e estilizar no CSS.")

console.log("Prestem atenção onde deve ser trocado/alterado. Não esqueça de nomear suas fotos de acordo com a minha biblioteca. Fundo, perdeu, ganhou, logo e fundo (música) para não se confundir.")
