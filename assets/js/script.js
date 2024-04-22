/*
LINK VÍDEO YT:
https://www.youtube.com/watch?v=O9VzMwJ--XY
*/





/*Troca de Tela*/
let elementoAtual = null;
function toggle(el) {
    if (elementoAtual && elementoAtual !== el) {
        document.getElementById(elementoAtual).style.display = "none";
    }

    let elemento = document.getElementById(el);

    if (el === elementoAtual) {
        elemento.style.display = "none";
        elementoAtual = null;

    }else {
        elemento.style.display = "flex";
        elementoAtual = el;
    }
}
/*Sistema Registro*/

function fazerRegistro() {
    let name = document.getElementById('client-name').value;
    let newUser = document.getElementById('crt-user').value;
    let newPass = document.getElementById('crt-pass').value;
    let confirmPass = document.getElementById('pass-confirm').value;

    if (newPass !== confirmPass) {
        document.getElementById('register-result').textContent = "As senhas não conferem!";
    }else {
        localStorage.setItem('newUserName', name);
        localStorage.setItem('novoUsuario', newUser);
        localStorage.setItem('novaSenha', newPass);

        document.getElementById('register-result').textContent = "Registrado com sucesso"
    }

    
}

/*Submit Registro*/
document.querySelector('#register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    fazerRegistro();
})


/*Sistema Login*/

function fazerLogin() {
    let newUser = document.getElementById('usuario').value;
    let newPass = document.getElementById('senha').value;

    let storedUser = localStorage.getItem('novoUsuario');
    let storedPass = localStorage.getItem('novaSenha');


    if (newUser === storedUser && newPass === storedPass) {
        window.open('amizade.html')
    }else {
        document.getElementById('login-result').textContent = "Login ou Senha inválido."
        

    }
    
    
   
}
/*Submit Login*/
document.querySelector('#login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    fazerLogin();
})



 /* Mostrar a senha */
 function showPass() {
    let inputPasses = document.querySelectorAll('#senha, #crt-pass');

    inputPasses.forEach((inputPass) => {
        if (inputPass.type === 'password') {
            inputPass.setAttribute('type', 'text');
        } else {
            inputPass.setAttribute('type', 'password');
        }
    });
}


