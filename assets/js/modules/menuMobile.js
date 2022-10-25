const btnMobile = document.getElementById("hamburger")

export default function clickMenu(){   
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
 
}
btnMobile.addEventListener('click', clickMenu)  
clickMenu()



