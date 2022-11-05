const html = document.getElementById('html')
const css = document.getElementById('css')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')
const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')


export function showSkillHtml(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-html.webp"

    nome.textContent = "HTML"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de marcação utilizada para criação de paginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Foi a primeira tecnologia que comecei a estudar e por este motivo sou bem familiarizado com a mesma que é fundamental para todo desenvolvedor front-end."

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 6 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillCss(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-css.svg"

    nome.textContent = "CSS"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de estilo fundamental para a estilização de páginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Possuo bastante familiaridade com a tecnologia, juntamente do html foram as primeiras que comecei a estudar e ja possuo uma boa experiència com a mesma. "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 6 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillJs(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-js.svg"

    nome.textContent = "JavaScript"

    descricao.innerHTML = "<span>Descrição:</span> É uma das principais linguagens de programação do desenvolvimento web"

    conhecimento.innerHTML = "<span>Conhecimento:</span> Foi a primeira linguagem de programação que tive contato, e desde o inicio achei a sintaxe dela extremamente simples e de fácil aprendizado. Também possuo familiaridade com o ES6 e no uso do DOM.  "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 4 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillGit(){

    const logo = document.getElementById('logo-tec').src="assets/img/icon-git.png"

    nome.textContent = "Git"

    descricao.innerHTML = "<span>Descrição:</span> É um software Open Source para versionamento de código."

    conhecimento.innerHTML = "<span>Conhecimento:</span>O uso do git é fundamental seja para projetos em grupos ou solos, por este motivo, tenho bastante familiaridade com seu uso e estou usando sempre no meu dia a dia.  "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 5 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"

}

export function showSkillGithub(){

    const logo = document.getElementById('logo-tec').src="assets/img/github-icon3.png"

    nome.textContent = "GitHub"

    descricao.innerHTML = "<span>Descrição:</span> É uma plataforma de programadores na qual voce pode criar e compartilhar seus projetos e muito mais."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Um bom perfil no gihub é fundamental para todo bom programador, por isso sempre mantenho meu perfil atualizado e com todos meus projetos nos em seus repositórios. "

    experiencia.innerHTML = "<span>Experiência:</span> Tenho 5 meses de experiência com essa tecnologia."

    infoSkills.style.display = "block"
    mensagem.style.display = "none"
  
}



html.addEventListener("mouseover", showSkillHtml)
css.addEventListener("mouseover", showSkillCss)
js.addEventListener("mouseover", showSkillJs)
git.addEventListener("mouseover", showSkillGit)
github.addEventListener("mouseover", showSkillGithub)
