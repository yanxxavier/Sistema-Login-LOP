
/*Troca de Tela*/
function toggle(el) {
    let display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById(el).style.display = 'flex';
    }else {
        document.getElementById(el).style.display = 'none'
    }
}


/*SISTEMA LOGIN*/

function fazerLogin() {
    let user = document.getElementById('usuario').value;
    let password = document.getElementById('senha').value;
    console.log(password);
    console.log(user);
}

