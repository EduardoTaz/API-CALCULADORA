const express = require('express');

const app = express();

app.use(express.json());  
const port = 3000;

app.get('/calculadora', (req, res) => {
    const { numero1, numero2, operacao } = req.query;

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if(isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({erro: 'Número 1 e número 2 devem ser números'});
    }

    let result;

    switch(operacao) {
        case 'soma':
            result = n1 + n2;
            break;
        case 'subtracao': 
            result = n1 - n2;
            break;
        case 'multiplicacao': 
            result = n1 * n2;
            break;
        case 'divisao':
            if(numero2 === 0) {
                return res.status(400).json({erro: 'Divisão por zero não é permitido'});
            }
            result = n1 / n2;
            break;
        default:
            return res.status(400).json({erro: 'Operação inválida'});
    }

    res.json({result});
})




// Maurício passou para ver primos
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}



app.get('/prime', (req, res) => {
    const { numero } = req.query;

    const n1 = parseInt(numero);  

    if (isNaN(n1)) {
        return res.status(400).json({ erro: 'Verifique os dados e tente novamente' });
    }

    const resultado = isPrime(n1) ? "É primo" : "Não é primo";

    res.json({ numero: n1, primo: resultado }); // Preciso retornar em json

});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

process.on('uncaughtException', (err) => {
    console.error('Erro não tratado:', err);
});
 
process.on('unhandledRejection', (err) => {
    console.error(('Rejeição não tratada:', err));
});