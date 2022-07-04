const pname=document.getElementById('p-name');
const pemail=document.getElementById('p-email');
const pphone=document.getElementById('p-phone');
const pdate=document.getElementById('p-date');
const nextBTN=document.querySelector('.next-BTN');
const error=document.querySelector('.error');

const invalid=document.getElementById('invalid');
const correct=document.getElementById('correct');



//page 2 personafl information validation
nextBTN.addEventListener('click',(e)=>{
    //call  name validation function
    nameValidation(e);
    
    //call  email validation function
    emailValidation(e);   

});

//validate name  =====
function nameValidation(e){
    if(pname.value.length<2 || pname.value.trim()==""){
        error.classList.add('active');
        invalid.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0
        10 0ZM9.28571 5.17857C9.28571 5.08036 9.36607 5 9.46429 5H10.5357C10.6339 5 10.7143 5.08036 10.7143 5.17857V11.25C10.7143
        11.3482 10.6339 11.4286 10.5357 11.4286H9.46429C9.36607 11.4286 9.28571 11.3482 9.28571 11.25V5.17857ZM10 15C9.71963 14.9943
        9.45267 14.8789 9.25641 14.6786C9.06014 14.4783 8.95022 14.209 8.95022 13.9286C8.95022 13.6481 9.06014 13.3789 9.25641 
        13.1786C9.45267 12.9783 9.71963 12.8629 10 12.8571C10.2804 12.8629 10.5473 12.9783 10.7436 13.1786C10.9399 13.3789 11.0498 13.6481
        11.0498 13.9286C11.0498 14.209 10.9399 14.4783 10.7436 14.6786C10.5473 14.8789 10.2804 14.9943 10 15Z" fill="#DC3545"/></svg>
        Invalid name`;
        correct.innerHTML='Name must be more then 2 letters';
        e.preventDefault(); 
        };
};

//validate email =====
function emailValidation(e){
    var mailformat =/^([A-Za-z0-9_\-\.])+\@redberry.ge/;
    if(!pemail.value.match(mailformat)){
        error.classList.add('active');
        invalid.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0
        10 0ZM9.28571 5.17857C9.28571 5.08036 9.36607 5 9.46429 5H10.5357C10.6339 5 10.7143 5.08036 10.7143 5.17857V11.25C10.7143
        11.3482 10.6339 11.4286 10.5357 11.4286H9.46429C9.36607 11.4286 9.28571 11.3482 9.28571 11.25V5.17857ZM10 15C9.71963 14.9943
        9.45267 14.8789 9.25641 14.6786C9.06014 14.4783 8.95022 14.209 8.95022 13.9286C8.95022 13.6481 9.06014 13.3789 9.25641 
        13.1786C9.45267 12.9783 9.71963 12.8629 10 12.8571C10.2804 12.8629 10.5473 12.9783 10.7436 13.1786C10.9399 13.3789 11.0498 13.6481
        11.0498 13.9286C11.0498 14.209 10.9399 14.4783 10.7436 14.6786C10.5473 14.8789 10.2804 14.9943 10 15Z" fill="#DC3545"/></svg>
        Invalid email`;
        correct.innerHTML='Please enter valid email address';
        e.preventDefault(); 
    };

};



//hide error panel when x is clicked
function hideErrorPanel(){  
    error.classList.remove('active');
};

//select knoweladge dropdown and pass value
function passValue(info){
    document.querySelector('.knoweladge').value=info;
};

//hide show dropdown for knoweladge
const  optionsDropdown=document.querySelector('.lvl-of-knoweladge');
optionsDropdown.onclick=()=>{
    optionsDropdown.classList.toggle('active');
};

