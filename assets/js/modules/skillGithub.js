const github = document.getElementById('github')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')

const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')

export default function showSkillGithub(){

    const logo = document.getElementById('logo-tec').src="assets/img/github-icon3.png"

    nome.textContent = "GitHub"

    descricao.innerHTML = "<span>Descrição:</span> É uma plataforma de programadores na qual voce pode criar e compartilhar seus projetos e muito mais."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Um bom perfil no gihub é fundamental para todo bom programador, por isso sempre mantenho meu perfil atualizado e com todos meus projetos nos em seus repositórios. "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 5 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"



  
}


github.addEventListener("mouseover", showSkillGithub)