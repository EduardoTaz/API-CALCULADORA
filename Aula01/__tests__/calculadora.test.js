const request = require('supertest');
const app = require('../index');

describe('Testes da rota /calculadora', () => {
    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'soma' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 8 });
    });

    it('Deve realizar uma divisão corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 2, numero2: 2, operacao: 'divisao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 1 });
    });

    it('Deve realizar uma multiplicação corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 2, numero2: 3, operacao: 'multiplicacao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 6 });
    });

    it('Deve realizar uma subtração corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'subtracao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });

    it('Deve realizar uma subtração incorretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero11: 5, numero2: 3, operacao: 'subtracao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });

    it('Deve realizar uma multiplicação incorretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'subtracao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });
    

    
});

describe('Testes da rota /primo', () => {
    it('Deve realizar uma verificação corretamente', async () => {
        const response = await request(app).get('/primo').query({ numero: 5 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ numero: 5, resultado: 'É primo' });
    });
});
