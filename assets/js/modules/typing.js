const myName = document.querySelector('.name'); 
const myJob = document.querySelector('.job'); 
const fName = myName.innerHTML;
const fjob = myJob.innerHTML;
myName.innerHTML='';
myJob.innerHTML='';
const button = document.querySelector('.github-Button');

export default function typeWriter (name, job) {
    setTimeout( () => {
    
    const myNameF = name.split('');
    myName.innerHTML='';
    myNameF.forEach( (letter, index) => {
        setTimeout(function (){
            myName.innerHTML += letter;
        }, 150 * index)
    })}, 1500)

    setTimeout( () => {
        const myJobF = job.split('');
        myJob.innerHTML='';
        myJobF.forEach( (letter, index) =>{
            setTimeout(function (){
                myJob.innerHTML += letter;
            }, 150 * index)
        })
    }, 3000)

    setTimeout(function() {
        button.style.opacity = '1'
        
    }, 7000);
    
}






typeWriter(fName,fjob )



