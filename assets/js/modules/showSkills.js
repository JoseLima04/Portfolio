const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')
const nome = document.getElementById('nome-tec')
const descricao = document.getElementById('desc-tec')
const conhecimento = document.getElementById('conhecimento-tec')
const experiencia = document.getElementById('exp-tec')


export function showSkillHtml(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-html.png"

    nome.textContent = "HTML"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de marcação utilizada para criação de paginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Foi a primeira tecnologia que comecei a estudar e por este motivo sou bem familiarizado com a mesma que é fundamental para todo desenvolvedor front-end."


    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillCss(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-css.png"

    nome.textContent = "CSS"

    descricao.innerHTML = "<span>Descrição:</span> É uma linguagem de estilo fundamental para a estilização de páginas web."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Possuo bastante familiaridade com a tecnologia, juntamente do html foram as primeiras que comecei a estudar e ja possuo uma boa experiencia com a mesma. "


    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillJs(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-js.png"

    nome.textContent = "JavaScript"

    descricao.innerHTML = "<span>Descrição:</span> É uma das principais linguagens de programação do desenvolvimento web"

    conhecimento.innerHTML = "<span>Conhecimento:</span> Foi a primeira linguagem de programação que tive contato, e desde o inicio achei a sintaxe dela extremamente simples e de fácil aprendizado. Também possuo familiaridade com o ES6 e no uso do DOM.  "


    infoSkills.style.display = "block"
    mensagem.style.display = "none"
 
}

export function showSkillGit(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-git.png"

    nome.textContent = "Git"

    descricao.innerHTML = "<span>Descrição:</span> É um software Open Source para versionamento de código."

    conhecimento.innerHTML = "<span>Conhecimento:</span>O uso do git é fundamental seja para projetos em grupos ou solos, por este motivo, tenho bastante familiaridade com seu uso e estou usando sempre no meu dia a dia.  "


    infoSkills.style.display = "block"
    mensagem.style.display = "none"

}

export function showSkillGithub(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-github.png"

    nome.textContent = "GitHub"

    descricao.innerHTML = "<span>Descrição:</span> É uma plataforma de programadores na qual voce pode criar e compartilhar seus projetos e muito mais."

    conhecimento.innerHTML = "<span>Conhecimento:</span>Um bom perfil no github é fundamental para todo bom programador, por isso sempre mantenho meu perfil e repositórios atualizados. "


    infoSkills.style.display = "block"
    mensagem.style.display = "none"
  
}

export function showSkillReact(){

    const logo = document.getElementById('logo-tec').src="assets/img/logo-react.png"

    nome.textContent = "ReactJS"

    descricao.innerHTML = "<span>Descrição:</span> React é uma biblioteca javascript muito utilizada na criação de interfaces de usuário."

    conhecimento.innerHTML = "<span>Conhecimento:</span> React é uma das tecnologias mais utilizadas hoje no mercado front-end e ja possuo uma boa familiaridade com os recursos que a tecnologia tem a oferecer."

   

    infoSkills.style.display = "block"
    mensagem.style.display = "none"
  
}




html.addEventListener("mouseover", showSkillHtml)
css.addEventListener("mouseover", showSkillCss)
js.addEventListener("mouseover", showSkillJs)
git.addEventListener("mouseover", showSkillGit)
github.addEventListener("mouseover", showSkillGithub)
react.addEventListener("mouseover", showSkillReact)



