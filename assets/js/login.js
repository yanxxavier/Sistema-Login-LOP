/*Sistema Registro*/
import { setUserData, getUserData, clearCategory } from './localStorage.js';
export default function initLogin() {
    console.log('login')
    function createUser() {
        localStorage.clear();
        console.log('localStorage após limpeza:', localStorage);
        
        let name = document.getElementById('client-name');
        let age = document.getElementById("client-age");
        let newUser = document.getElementById('crt-user');
        let newPass = document.getElementById('crt-pass');
        let gender = document.querySelector("input[name='generos']:checked");
        let userData = {
            name: name.value,
            age: age.value,
            gen: gender.value, 
            user: newUser.value,
            password: newPass.value,
            comp: [],
        }
        setUserData(userData)
        
        
        name.value = "";
        age.value = "";
        newUser.value = "";
        newPass.value = "";

        console.log('localStorage após criar:', localStorage);
    }

    
    const RegEvent = new CustomEvent("regSucess");
    
    
    document.querySelector('#register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        createUser();
        document.dispatchEvent(RegEvent);
        Toastify({ //Lib de alert 
            text: `Registrado com sucesso!`,
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "green",
              color: "white",
            },
        }).showToast();
        
      
            
    })
    const logEvent = new CustomEvent("logSucess");

    function fazerLogin() {
        const loginUser = document.getElementById("usuario").value;
        const loginPass = document.getElementById("senha").value;
        const userName = document.getElementById("user-name");
        const userObj = getUserData();

        if(loginUser !== userObj.user || loginPass !== userObj.password) {
            Toastify({ //Lib de alert 
                text: "Usuario ou senha nao conferem!",
                duration: 3000,
                close: true,
                gravity: "bottom", 
                position: "right",
                stopOnFocus: true, 
                style: {
                  background: "red",
                },
                
            }).showToast();
            return 
        }else {
            Toastify({ //Lib de alert 
                text: `Seja bem vindo, ${userObj.name}!`,
                duration: 3000,
                close: true,
                gravity: "bottom", 
                position: "right",
                stopOnFocus: true, 
                style: {
                  background: "green",
                  color: "white",
                },
            }).showToast();

            document.getElementById("usuario").value = "";
            document.getElementById("senha").value = "";
            userName.textContent = userObj.name;
            document.dispatchEvent(logEvent);
        }
        

    }

   

    document.querySelector('#login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        fazerLogin()
          
    })

    
       

    
    
    
    
    
}
