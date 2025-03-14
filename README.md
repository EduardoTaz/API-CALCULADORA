# 📌 API Calculadora e Verificação de Números Primos

Esta API permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão) e verificar se um número é primo.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- Jest (para testes)

---

## 📍 Como Rodar a API Localmente
1. **Clone o repositório:**
   ```sh
   https://github.com/EduardoTaz/API-CALCULADORA.git
   ```
2. **Acesse o diretório do projeto:**
   ```sh
   cd API-CALCULADORA
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor:**
   ```sh
   node index.js
   ```
5. **Execute os testes unitários:**
   ```sh
   npm test
   ```

---

## 📌 Endpoints

### 🏠 **1. Rota Principal (`/`)**
- **GET `/`**
- **Descrição:** Exibe uma mensagem informando que um parâmetro está faltando.
- **Resposta:**
  ```plaintext
  Faltou algo na url
  ```

---

### 🧮 **2. Calculadora (`/calculadora`)**
- **GET `/calculadora`**
- **Descrição:** Realiza operações matemáticas básicas.
- **Parâmetros (Query Params):**
  
  | Parâmetro | Tipo     | Obrigatório | Descrição |
  |-----------|---------|------------|-----------|
  | `numero1` | `number` | Sim | Primeiro número da operação |
  | `numero2` | `number` | Sim | Segundo número da operação |
  | `operacao` | `string` | Sim | Tipo de operação (`soma`, `subtracao`, `multiplicacao`, `divisao`) |

- **Exemplos de Requisição:**

  **Soma:**
  ```sh
  GET /calculadora?numero1=5&numero2=3&operacao=soma
  ```
  **Resposta:**
  ```json
  {
    "result": 8
  }
  ```

  **Divisão:**
  ```sh
  GET /calculadora?numero1=10&numero2=2&operacao=divisao
  ```
  **Resposta:**
  ```json
  {
    "result": 5
  }
  ```

- **Erros Possíveis:**
  
  | Código HTTP | Mensagem |
  |-------------|---------|
  | `400 Bad Request` | `{"error": "Os parâmetros numero1 e numero2 devem ser números"}` |
  | `400 Bad Request` | `{"error": "Divisão por zero não permitida"}` |
  | `400 Bad Request` | `{"error": "Operação inválida"}` |

---

### 🔢 **3. Verificar Número Primo (`/primo`)**
- **GET `/primo`**
- **Descrição:** Verifica se um número é primo.
- **Parâmetros (Query Params):**
  
  | Parâmetro | Tipo     | Obrigatório | Descrição |
  |-----------|---------|------------|-----------|
  | `numero` | `number` | Sim | Número a ser verificado |

- **Exemplos de Requisição:**

  **Número Primo:**
  ```sh
  GET /primo?numero=5
  ```
  **Resposta:**
  ```json
  {
    "numero": 5,
    "resultado": "É primo"
  }
  ```

  **Número Não Primo:**
  ```sh
  GET /primo?numero=8
  ```
  **Resposta:**
  ```json
  {
    "numero": 8,
    "resultado": "Não é primo"
  }
  ```

- **Erros Possíveis:**
  
  | Código HTTP | Mensagem |
  |-------------|---------|
  | `400 Bad Request` | `{"error": "O parâmetro numero deve ser um número"}` |
