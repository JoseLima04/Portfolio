const button = document.querySelector('.vermais-Button')
export default function verMais(){
    
    const card = document.querySelector('.hidden')   
    if(card.classList == 'hidden'){
        card.classList.remove('hidden')
    }else{
        card.classList.add('hidden')
    }

}

button.addEventListener('click', verMais)  
verMais()
