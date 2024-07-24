export default function initShowPass() {
    const showPassRegBtn = document.getElementById("senha-reg");
    const showPassLogBtn = document.getElementById("senha-log");

    showPassLogBtn.addEventListener("click", showPass);
    showPassRegBtn.addEventListener("click", showPass);

    function showPass() {
         let inputPasses = document.querySelectorAll('#senha, #crt-pass');
     
         inputPasses.forEach((inputPass) => {
             if (inputPass.type === 'password') {
                 inputPass.setAttribute('type', 'text');
                 showPassLogBtn.setAttribute("class", "fa-solid fa-eye-slash");
                 showPassRegBtn.setAttribute("class", "fa-solid fa-eye-slash");
             } else {
                 inputPass.setAttribute('type', 'password');
                 showPassLogBtn.setAttribute("class", "fa-solid fa-eye")
                 showPassRegBtn.setAttribute("class", "fa-solid fa-eye")
             }
         });
    }

}
