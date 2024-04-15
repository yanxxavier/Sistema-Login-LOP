/*
LINK VÍDEO YT:
https://www.youtube.com/watch?v=O9VzMwJ--XY
*/





/*Troca de Tela*/
function toggle(el) {
    let display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById(el).style.display = 'flex';
    }else {
        document.getElementById(el).style.display = 'none'
    }
}




/*Sistema Login*/

function fazerLogin() {
    let user = "admin";
    let pass = "admin";
    let newUser = document.getElementById('usuario').value;
    let newPass = document.getElementById('senha').value;


    if (newUser == user && newPass == pass) {
        window.open('../pages/amizade.html')
    }else {
        document.getElementById('login-result').textContent = "Login ou Senha inválido."
        

    }
    
   
}
/* Check de texto */
function loginCheck () {
    let checkUser = document.getElementById('usuario').value;
    let checkPass = document.getElementById('senha').value;

    if (checkUser == "" || checkPass == "") {
        document.getElementById('login-result').textContent = "Preencha os campos acima.";
    }else {
        return fazerLogin();
    }
        
        
}


 /* Mostrar a senha */
 function showPass() {
    let inputPass = document.getElementById('senha');
  

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
    } else {
        inputPass.setAttribute('type', 'password')
    }
}


