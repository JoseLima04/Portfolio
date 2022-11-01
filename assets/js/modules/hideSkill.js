const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const git = document.getElementById('git')
const github = document.getElementById('github')
const infoSkills = document.querySelector('.info-skills')
const mensagem = document.getElementById('mensagem')


export default function hideSkill(){

    infoSkills.style.display = "none"
    mensagem.style.display = "flex"
}

html.addEventListener("mouseout", hideSkill)
css.addEventListener("mouseout", hideSkill)
js.addEventListener("mouseout", hideSkill)
git.addEventListener("mouseout", hideSkill)
github.addEventListener("mouseout", hideSkill)