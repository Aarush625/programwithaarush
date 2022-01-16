function returnToPage(){
    window.location = 'index.html';
}

function showSucces(){
    window.location = 'succes.html';
    // setTimeout(() => {
    //     returnToPage();
    // }, 4000)
}

function sendMail(name, msg){
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'surbhia704@gmail.com',
        Password: 'drudyiokavofclnu',
        To: 'surbhia704@gmail.com',
        From: 'vii23aarushranjan88@gmail.com',
        Subject: `${name} has Sent You A Message`,
        Body: `The Message: ${msg}.`
    }).then();
};

let userName = document.getElementById('userName');
userName.addEventListener('blur', ()=>{
    if(userName.value == ''){
        let form = document.getElementById('formInp');
        form.style.border = '5px solid red';
        setTimeout(() => {
            let form = document.getElementById('formInp');
            form.style.border = '5px solid black';
        }, 3000);
    }
});

let userMessage = document.getElementById('userMessage');
userMessage.addEventListener('blur', ()=>{
    if(userMessage.value == ''){
        let form = document.getElementById('formInp');
        form.style.border = '5px solid red';
        setTimeout(() => {
            let form = document.getElementById('formInp');
            form.style.border = '5px solid black';
        }, 3000);
    }
});

let validate = false;

let btnn = document.getElementById('btnn');
btnn.addEventListener('click', ()=>{
    let delay = 2000;
    if(userMessage.value == ''){
        let form = document.getElementById('formInp');
        form.style.border = '5px solid red';
        validate = false;
        setTimeout(() => {
            let form = document.getElementById('formInp');
            form.style.border = '5px solid black';
        }, delay);
    }
    else if(userName.value == ''){
        let form = document.getElementById('formInp');
        form.style.border = '5px solid red';
        validate = false;
        setTimeout(() => {
            let form = document.getElementById('formInp');
            form.style.border = '5px solid black';
        }, delay);
    }
    else{
        validate = true;
        let userName1 = document.getElementById('userName').value;
        let userMessage1 = document.getElementById('userMessage').value;
        let userName = document.getElementById('userName').value = '';
        let userMessage = document.getElementById('userMessage').value = '';
        let form = document.getElementById('formInp');
        form.style.border = '5px solid green';
        sendMail(userName1, userMessage1);
        window.location = 'succes.html';
        setTimeout(() => {
            let form = document.getElementById('formInp');
            form.style.border = '5px solid black'; 
        }, delay);
    }
});