//select knoweladge dropdown and pass value
function passValue(info){
    document.querySelector('.knoweladge').value=info;
};
//hide show dropdown for knoweladge
const  optionsDropdown=document.querySelector('.lvl-of-knoweladge');
optionsDropdown.onclick=()=>{
    optionsDropdown.classList.toggle('active');
};