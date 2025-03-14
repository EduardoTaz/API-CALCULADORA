const express = require('express');

const app = express();

app.use(express.json());  

const port = 3000;

app.get('/', (req, res) => {
    res.send("Faltou algo na url");
});

app.get('/calculadora', (req, res) => {
    const { numero1, numero2, operacao } = req.query;

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if(isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Os parâmetros numero1 e numero2 devem ser números' });
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
            if(n2 === 0) {
                return res.status(400).json({ error: 'Divisão por zero não permitida' });
            }
            result = n1 / n2;
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });
    }

    res.json({ result });
});

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

app.get('/primo', (req, res) => {
    const { numero } = req.query;

    const n1 = parseInt(numero);  

    if (isNaN(n1)) {
        return res.status(400).json({ error: 'O parâmetro numero deve ser um número' });
    }

    const resultado = isPrime(n1) ? "É primo" : "Não é primo";

    res.json({ numero: n1, resultado });
});

module.exports = app;
