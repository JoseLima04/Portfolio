const js = document.getElementById('js')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')

const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')

export default function showSkillJs(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-js.svg"

    nome.textContent = "JavaScript"

    descricao.innerHTML = "<span>Descrição:</span> É uma das principais linguagens de programação do desenvolvimento web"

    conhecimento.innerHTML = "<span>Conhecimento:</span> Foi a primeira linguagem de programação que tive contato, e desde o inicio achei a sintaxe dela extremamente simples e de fácil aprendizado. Também possuo familiaridade com o ES6 e no uso do DOM.  "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 4 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"



  
}


js.addEventListener("mouseover", showSkillJs)