const git = document.getElementById('git')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')

const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')

export default function showSkillGit(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-git.png"

    nome.textContent = "Git"

    descricao.innerHTML = "<span>Descrição:</span> É um software Open Source para versionamento de código."

    conhecimento.innerHTML = "<span>Conhecimento:</span>O uso do git é fundamental seja para projetos em grupos ou solos, por este motivo, tenho bastante familiaridade com seu uso e estou usando sempre no meu dia a dia.  "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 5 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"



  
}


git.addEventListener("mouseover", showSkillGit)