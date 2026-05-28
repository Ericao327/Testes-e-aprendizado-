# Testes-Alura-JS

Repositório com exercícios e exemplos de testes JavaScript feitos durante os cursos da Alura.

## Descrição

Este repositório contém pequenos projetos, exercícios e tutoriais focados em testes automatizados em JavaScript (unitários e de integração), usados para praticar conceitos aprendidos nos cursos da Alura.

> Conteúdo focado em: Jest, testes unitários, mocks, testes assíncronos e boas práticas para testar funções e módulos em Node.js.

## Estrutura do repositório (exemplo)

- /src - código-fonte
- /tests - arquivos de teste
- package.json - dependências e scripts
- README.md - este arquivo

> Ajuste conforme a estrutura real do seu repositório.

## Requisitos

- Node.js (v14+ recomendado)
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Ericao327/Testes-Alura-JS.git
cd Testes-Alura-JS
```

2. Instale as dependências:

```bash
npm install
# ou
# yarn install
```

## Executando os testes

Se o projeto usa Jest (exemplo):

```bash
npm test
# ou, para rodar em modo watch
npm test -- --watch
```

Se não houver script `test` configurado no package.json, adicione algo como:

```json
"scripts": {
  "test": "jest"
}
```

## Exemplos em JavaScript

Exemplo simples de função e teste (arquivo: src/somar.js):

```javascript
// src/somar.js
function somar(a, b) {
  return a + b;
}

module.exports = somar;
```

Teste correspondente (arquivo: tests/somar.test.js):

```javascript
const somar = require('../src/somar');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});
```

Exemplo de teste assíncrono (usar async/await):

```javascript
// src/obterUsuario.js (exemplo hipotético)
async function obterUsuario(id) {
  // simula chamada a API
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, nome: 'Usuário Exemplo' }), 100);
  });
}

module.exports = obterUsuario;

// tests/obterUsuario.test.js
const obterUsuario = require('../src/obterUsuario');

test('obtém usuário assíncrono', async () => {
  const usuario = await obterUsuario(1);
  expect(usuario).toHaveProperty('nome', 'Usuário Exemplo');
});
```

## Boas práticas

- Nomeie os arquivos de teste com `.test.js` ou `.spec.js`.
- Teste unidades pequenas e bem definidas.
- Use mocks/stubs para isolar dependências externas.
- Mantenha os testes rápidos e determinísticos.

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Faça commits claros e atômicos
4. Abra um pull request com descrição do que foi alterado

