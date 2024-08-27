//Recupera o usuario
export function getUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : {};
}
//Salva alteracoes
export function setUserData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
}
//Recuperar categorias
export function getUserCategory() {
    const userData = getUserData();
    return userData.category || '';
}
//Atualizar categoria
export function setUserCategory(category) {
    const userData = getUserData();
    userData.category = category;
    setUserData(userData);
}

export function clearCategory() {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    
   
    userData.comp = [];

    localStorage.setItem('userData', JSON.stringify(userData));
}
