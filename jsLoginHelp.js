
const fs = require('fs');

// Importar o módulo 'fs' para manipulação de arquivos

// Criar um objeto para armazenar os usuários
const users = {};

// Função para registrar um novo usuário
function registerUser(username, password) {
    // Verificar se o usuário já existe
    if (users[username]) {
        console.log('Usuário já existe');
        return;
    }

    // Adicionar o usuário ao objeto
    users[username] = { password };

    // Salvar os usuários no arquivo JSON
    saveUsers();
    console.log('Usuário registrado com sucesso');
}

// Função para fazer login
function loginUser(username, password) {
    // Verificar se o usuário existe
    if (!users[username]) {
        console.log('Usuário não encontrado');
        return;
    }

    // Verificar se a senha está correta
    if (users[username].password === password) {
        console.log('Login bem-sucedido');
    } else {
        console.log('Senha incorreta');
    }
}

// Função para salvar os usuários no arquivo JSON
function saveUsers() {
    fs.writeFileSync('users.json', JSON.stringify(users));
}

// Função para carregar os usuários do arquivo JSON
function loadUsers() {
    try {
        const data = fs.readFileSync('users.json');
        users = JSON.parse(data);
    } catch (error) {
        users = {};
    }
}

// Carregar os usuários ao iniciar o programa
loadUsers();

// Exemplo de uso
registerUser('joao', '123456');
loginUser('joao', '123456');