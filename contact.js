let para= document.querySelector('#bi');
para.addEventListener('click' ,updateName);
function updateName(){
    let name =  ' Enregistrer';
    para.textContent=alert ( name);
}