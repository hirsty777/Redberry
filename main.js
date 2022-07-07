const pname=document.getElementById('p-name');
const pemail=document.getElementById('p-email');
const pphone=document.getElementById('p-phone');
const pdate=document.getElementById('p-date');
const nextBTN=document.querySelector('.next-BTN');
const doneBTN=document.querySelector('.done-BTN');
const error=document.querySelector('.error');
//page 3 input fields
const chooseCharacter=document.querySelector('.character');
const chooseKnoweladge=document.querySelector('.knoweladge');


const invalid=document.getElementById('invalid');
const correct=document.getElementById('correct');

//validation icons
let nameIcon=document.getElementById('nameicon');
let emailIcon=document.getElementById('emailicon');
let phoneIcon=document.getElementById('phoneicon');
let dateIcon=document.getElementById('dateicon');




//page 2 personafl information validation==============
//make validation when next BTN is clicked
if(nextBTN){
    nextBTN.addEventListener('click',(e)=>{

    //call date of birth validation function
    dateValidation(e);

    //call phone number validation function
    phoneValidation(e);

    //call  email validation function
    emailValidation(e); 

    //call  name validation function
    nameValidation(e);
        
    });
}



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
        //hide validate icon 
        nameIcon.style.display='none';
        //change color to red if not valid
        pname.style.color='red';
        e.preventDefault(); 
    }
    else{
        //display validate icon 
        nameIcon.style.display='block';
        //change color to black if validate
        pname.style.color='black';
    };

};

//validate email =====
function emailValidation(e){
    let mailformat =/^([A-Za-z0-9_\-\.])+\@redberry.ge/;
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
        //hide validate icon 
        emailIcon.style.display='none';
        //change color to red if not valid
        pemail.style.color='red';
        e.preventDefault(); 
    }
    else{
        //display validate icon 
        emailIcon.style.display='block';
        //change color to black if validate
        pemail.style.color='black';
    };

};

//validate phone number ===
function phoneValidation(e){
    if(pphone.value.length!==9 || pphone.value.trim()==""){
        error.classList.add('active');
        invalid.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0
        10 0ZM9.28571 5.17857C9.28571 5.08036 9.36607 5 9.46429 5H10.5357C10.6339 5 10.7143 5.08036 10.7143 5.17857V11.25C10.7143
        11.3482 10.6339 11.4286 10.5357 11.4286H9.46429C9.36607 11.4286 9.28571 11.3482 9.28571 11.25V5.17857ZM10 15C9.71963 14.9943
        9.45267 14.8789 9.25641 14.6786C9.06014 14.4783 8.95022 14.209 8.95022 13.9286C8.95022 13.6481 9.06014 13.3789 9.25641 
        13.1786C9.45267 12.9783 9.71963 12.8629 10 12.8571C10.2804 12.8629 10.5473 12.9783 10.7436 13.1786C10.9399 13.3789 11.0498 13.6481
        11.0498 13.9286C11.0498 14.209 10.9399 14.4783 10.7436 14.6786C10.5473 14.8789 10.2804 14.9943 10 15Z" fill="#DC3545"/></svg>
        Invalid phone number`;
        correct.innerHTML='Phone must be 9 digits';
        //hide validate icon 
        phoneIcon.style.display='none';
        //change color to red if not valid
        pphone.style.color='red';
        e.preventDefault(); 
    }
    else{
        //display validate icon 
        phoneIcon.style.display='block';
        //change color to black if validate
        pphone.style.color='black';
    };

};

//validate date of birth===
function dateValidation(e){
    let dateval =("([0-9]{2})\/([0-9]{2})\/([0-9]{4})");
    if(!pdate.value.match(dateval)){
    error.classList.add('active');
    invalid.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0
    10 0ZM9.28571 5.17857C9.28571 5.08036 9.36607 5 9.46429 5H10.5357C10.6339 5 10.7143 5.08036 10.7143 5.17857V11.25C10.7143
    11.3482 10.6339 11.4286 10.5357 11.4286H9.46429C9.36607 11.4286 9.28571 11.3482 9.28571 11.25V5.17857ZM10 15C9.71963 14.9943
    9.45267 14.8789 9.25641 14.6786C9.06014 14.4783 8.95022 14.209 8.95022 13.9286C8.95022 13.6481 9.06014 13.3789 9.25641 
    13.1786C9.45267 12.9783 9.71963 12.8629 10 12.8571C10.2804 12.8629 10.5473 12.9783 10.7436 13.1786C10.9399 13.3789 11.0498 13.6481
    11.0498 13.9286C11.0498 14.209 10.9399 14.4783 10.7436 14.6786C10.5473 14.8789 10.2804 14.9943 10 15Z" fill="#DC3545"/></svg>
    Invalid date`;
    correct.innerHTML='Please enter valid date(dd/MM/yyyy)';
    //hide validate icon 
    dateIcon.style.display='none';
    //change color to red if not valid
    pdate.style.color='red';
    e.preventDefault(); 
    }
    else{
    //display validate icon 
    dateIcon.style.display='block';
    //change color to black if validate
    pdate.style.color='black';
    };
};


//hide error panel when x is clicked
function hideErrorPanel(){  
    error.classList.remove('active');
};



//page 3 lvl of knoweladge and character choose
//select knoweladge dropdown and pass value
function passValueKnoweladge(infoKnoweladge){
    chooseKnoweladge.value=infoKnoweladge;
};

//hide show dropdown for knoweladge
const  KoptionsDropdown=document.querySelector('.lvl-of-knoweladge');
if(KoptionsDropdown){
    KoptionsDropdown.onclick=()=>{
    KoptionsDropdown.classList.toggle('active');
    };
};


//hide show dropdown for character
const  CoptionsDropdown=document.querySelector('.choose-your-character');
if(CoptionsDropdown){
    CoptionsDropdown.onclick=()=>{
    CoptionsDropdown.classList.toggle('active');
    };
};


//fetch data for characters and deploy on body
const Coptions=document.querySelector('.C-options');
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
.then(res=>res.json())
.then(data=>{   
    data.forEach((n)=>{
    Coptions.innerHTML+=`
    <div onclick="passValueCharacter('${n.name}')">${n.name}<img src="https://chess-tournament-api.devtest.ge${n.image}"></div>
    `});
}); 

//select character dropdown and pass value
function passValueCharacter(infoCharacter){
    chooseCharacter.value=infoCharacter;
};

//making sure knoweladge and character are choosen
//collect input values
if(doneBTN){
doneBTN.addEventListener('click',(e)=>{
    //making sure knoweladge and character are choosen
    page4Validation(e);

    //collect information
    
});
};

//making sure knoweladge  character and answer  are choosen
function page4Validation(e){
    //check if character is selected
    if(chooseCharacter.value==''){
        console.log('empty');
        e.preventDefault();
    }else{
        console.log(chooseCharacter.value);
    };
    //check if knoweladge lvl is selected
    if(chooseKnoweladge.value==''){
        console.log('empty1');
        e.preventDefault();
    }else{
        console.log(chooseKnoweladge.value);
    };
    //check if answer is selected
    let getselectedValue=document.querySelector('input[name="answer"]:checked');
    if(getselectedValue!=null){
        console.log(getselectedValue.value);
    }else{
        console.log('not selelcted')
        e.preventDefault();
    };
};
