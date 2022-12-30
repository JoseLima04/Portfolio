const meuNome = document.querySelector('.name'); 
const meuCargo = document.querySelector('.cargo'); 
const fName = meuNome.innerHTML;
const fCargo = meuCargo.innerHTML;
meuNome.innerHTML='';
meuCargo.innerHTML='';
const button = document.querySelector('.github-Button');

export default function typeWriter (nome, cargo) {
    setTimeout( () => {
    
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)

    setTimeout( () => {
        const meuCargoF = cargo.split('');
        meuCargo.innerHTML='';
        meuCargoF.forEach( (letra2, index2) =>{
            setTimeout(function (){
                meuCargo.innerHTML += letra2;
            }, 150 * index2)
        })
    }, 3000)

    setTimeout(function() {
        button.style.opacity = '1'
        
    }, 7000);
    
}






typeWriter(fName,fCargo )



