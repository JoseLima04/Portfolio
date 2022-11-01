const button = document.querySelector('.vermais-Button')
export default function verMais(){
   
    const card = document.querySelector('.projetos-escondido') 
    card.classList.toggle('hidden')
    if(card.classList.contains('hidden')){
        button.innerHTML = "Ver mais"
        button.style.color = '#C4C4C4'
    }else{
        button.innerHTML = "Ver menos"
        button.style.color = '#C4C4C4'
    }
}

button.addEventListener('click', verMais)  
verMais()
