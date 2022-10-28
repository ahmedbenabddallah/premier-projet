let para= document.querySelector('#bo');
para.addEventListener('click' ,updateName);
function updateName(){
    let name = prompt (' Enter a ne name');
    para.textContent=' rserver :' + name;
}