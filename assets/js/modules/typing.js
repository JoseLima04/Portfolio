export default function typing(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = ' ';

    textArray.forEach(function(value,pos){
        setTimeout(function(){
            element.innerHTML += value;
        }, 300 * pos)
    });   
}
const name = document.querySelector('.name');  
typing(name);
