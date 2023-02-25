const skillElements = document.querySelectorAll(".container-tech > .skill");
const skillImg = document.querySelectorAll('img')
const skillContent = document.querySelector('.skill-content');
const nameSkill = document.querySelector('.skill-title');


const avaliableSkills = {
    html: {
      title: 'HTML5',
      content: 'Possuo conhecimento intermediário/avançado.'
    },
    css: {
      title: 'CSS3',
      content: 'Possuo conhecimento intermediário/avançado.'
    },
    git: {
      title: 'Git',
      content: 'Possuo conhecimento básico/intermediário.'
    },
    github: {
      title: 'Github',
      content: 'Possuo conhecimento intermediário.'
    },
    js: {
      title: 'Javascript',
      content: 'Possuo conhecimento intermediário.'
    },   
    react: {
      title: 'ReactJs',
      content: 'Possuo conhecimento básico.'
    },

}


const setSkill = (e) => {
    let currentlySkillName = e.target['className'].split(' ')
    currentlySkillName = currentlySkillName[currentlySkillName.length - 1]
    const skill = avaliableSkills[currentlySkillName]

    if (!skill) return

    const skillBody = {
        name: document.querySelector('.skill-title'),
        content: document.querySelector('.skill-content')
    }
    
    skillBody.name.textContent = skill?.title;
    skillBody.content.textContent = skill?.content;
}


Array.from(skillElements).forEach(skill2 => {
    skill2.addEventListener('mouseover', setSkill)
});
  



