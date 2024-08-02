/*Sistema Registro*/

export default function initLogin() {
    
    function createUser() {
        let name = document.getElementById('client-name');
        let age = document.getElementById("client-age");
        let newUser = document.getElementById('crt-user');
        let newPass = document.getElementById('crt-pass');
        let gender = document.querySelector("input[name='generos']:checked");
        const userData = {
            name: name.value,
            age: age.value,
            gen: gender.value, 
            user: newUser.value,
            password: newPass.value,
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        
        
        name.value = "";
        age.value = "";
        newUser.value = "";
        newPass.value = "";
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

    function fazerLogin() {
        const loginUser = document.getElementById("usuario").value;
        const loginPass = document.getElementById("senha").value;
        const userName = document.getElementById("user-name");
        const storedData = localStorage.getItem("userData");
        const userObj = JSON.parse(storedData);

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
            return false
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
        }
        

    }

    const logEvent = new CustomEvent("logSucess");

    document.querySelector('#login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        fazerLogin()
        if(fazerLogin() === false) {
            return
        }else {
            document.dispatchEvent(logEvent);

        }
    
        
        
            
    })

    
       

    
    
    
    
    
}
