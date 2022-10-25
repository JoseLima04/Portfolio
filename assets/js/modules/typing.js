export default function typing(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';

    textoArray.forEach(function(valor,pos){
        setTimeout(function(){
            elemento.innerHTML += valor;
        }, 300 * pos)
    });   
}
const nome = document.getElementById("name");  
typing(nome);
