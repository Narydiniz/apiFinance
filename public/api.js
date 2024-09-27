const API_URL = 'http://localhost:3000/api';

//Função para realozar o login 
async function login(email,password){
    const response = await fetch(`${API_URL}/auth/login`,{
        method: 'post',
        
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({email,password})
    });
    return response.json();
} 

//Função para registar um novo usuario

async function login(nome,email,password, birth_date){
    const response = await fetch(`${API_URL}/auth/register`,{
        method: 'post',
        
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({nome,email,password, birth_date})
    });
    return response.json();
} 

//Função para obter todas as transações para rota segura

async function getAllTransactions() {
    const response = await fetch(`${API_URL}/auth/transactions`,{
        method: 'get',
        
        headers:{
            'Authorization': `bearer ${localStorage.getItem('token')}` //Se precisar de autenticação 
        }
       
    });
    return response.json();
} 