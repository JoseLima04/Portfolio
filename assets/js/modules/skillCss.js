const css = document.getElementById('css')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')

const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')

export default function showSkillCss(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-css.svg"

    nome.textContent = "CSS"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de estilo fundamental para a estilização de páginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Possuo bastante familiaridade com a tecnologia, juntamente do html foram as primeiras que comecei a estudar e ja possuo uma boa experiència com a mesma. "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 6 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"



  
}


css.addEventListener("mouseover", showSkillCss)