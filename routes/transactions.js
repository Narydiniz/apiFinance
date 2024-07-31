const express= require('express'); // Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador 

// Definir uma rota para obter todas as transações

router.get('/',transactionsController.getAllTransactions);

//Definindo uma rotapara adicionar uma nova transação

router.post('/',transactionsController.addTransaction);

//Defininco uma rota para atualizar uma transação exixtente (substituição completa)

router.put('/:id', transactionsController.updateTransactionPut);

//Defininco uma rota para atualizar uma transação exixtente (substituição parcial)

router.patch('/:id', transactionsController.updateTransactionPatch);

//Exportando o roteador

module.exports = router;
