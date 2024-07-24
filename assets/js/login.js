/*Sistema Registro*/

export default function initLogin() {

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
}
