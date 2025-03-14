const request = require('supertest');
const app = require('../index');

describe('Testes da rota API Calculadora', () => {
    it('Deve realizar uma soma corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'soma' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 8 });
    });

    it('Deve realizar uma subtração corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'subtracao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });

    it('Deve realizar uma multiplicação corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 2, numero2: 3, operacao: 'multiplicacao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 6 });
    });

    it('Deve realizar uma divisão corretamente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 6, numero2: 2, operacao: 'divisao' });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 3 });
    });

    it('Deve retornar erro para operação inválida', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 3, operacao: 'fasdfas' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Operação inválida' });
    });

    it('Deve retornar erro para número ausente', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, operacao: 'soma' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Os parâmetros numero1 e numero2 devem ser números' });
    });

    it('Deve retornar erro para divisão por zero', async () => {
        const response = await request(app).get('/calculadora').query({ numero1: 5, numero2: 0, operacao: 'divisao' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Divisão por zero não permitida' });
    });
});

describe('Testes da rota /primo', () => {
    it('Deve verificar corretamente se um número é primo', async () => {
        const response = await request(app).get('/primo').query({ numero: 5 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ numero: 5, resultado: 'É primo' });
    });

    it('Deve verificar corretamente se um número não é primo', async () => {
        const response = await request(app).get('/primo').query({ numero: 4 });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ numero: 4, resultado: 'Não é primo' });
    });

    it('Deve retornar erro para número ausente', async () => {
        const response = await request(app).get('/primo');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'O parâmetro numero deve ser um número' });
    });

    it('Deve retornar erro para entrada não numérica', async () => {
        const response = await request(app).get('/primo').query({ numero: 'abc' });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'O parâmetro numero deve ser um número' });
    });
});
