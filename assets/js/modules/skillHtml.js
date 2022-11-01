const html = document.getElementById('html')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')
const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')


export default function showSkillHtml(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-html.webp"

    nome.textContent = "HTML"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de marcação utilizada para criação de paginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Foi a primeira tecnologia que comecei a estudar e por este motivo sou bem familiarizado com a mesma que é fundamental para todo desenvolvedor front-end."

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 6 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"

    
}

html.addEventListener("mouseover", showSkillHtml)

