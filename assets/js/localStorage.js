//Recupera o usuario
export function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : {};
}
//Salva alteracoes
export function setUserData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
}
