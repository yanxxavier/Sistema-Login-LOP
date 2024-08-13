export default function initToggleScreen() {
    let elementoAtual = null;
    const instBtn = document.getElementById("inst-btn");
    const credBtn = document.getElementById("cred-btn");
    const compBtn = document.getElementById("comp-btn");
    const loginNavBtn = document.getElementById("sign-nav");
    const signScreenBtn = document.getElementById("sign-screen");
    const loginScreenBtn = document.getElementById("login-btn");
    const perfilNav = document.querySelector(".perfil");


    perfilNav.addEventListener("click", ()  => {
        toggle('content6');
    })

    instBtn.addEventListener("click", ()  => {
        toggle('content2');
    })
    credBtn.addEventListener("click", ()  => {
        toggle('content3');
    })
    compBtn.addEventListener("click", ()  => {
        toggle('content5')

    })
    loginNavBtn.addEventListener("click", ()  => {
        toggle('content');
    })
    signScreenBtn.addEventListener("click", ()  => {
        toggle('content4');
    })
    loginScreenBtn.addEventListener("click", ()  => {
        toggle('content');
    })

    document.addEventListener("regSucess", () => {
        toggle('content4');
        toggle('content');
    } )

    document.addEventListener("logSucess", () => {
        toggle('content');
        compBtn.removeAttribute("disabled")
        loginNavBtn.style.display = "none";
        perfilNav.style.display = "flex";

    })


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

}