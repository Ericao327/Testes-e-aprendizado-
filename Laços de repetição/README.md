#  Praticando Python: Funções

<div align="center">

<br/>

Repositório com os exercícios e atividades desenvolvidos durante o curso **Praticando Python: Funções** da [Alura](https://cursos.alura.com.br/course/praticando-python-funcoes).

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conteúdo Aprendido](#-conteúdo-aprendido)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar](#-como-executar)
- [Exemplos de Código](#-exemplos-de-código)
- [Curso](#-curso)
- [Autora do Curso](#-autora-do-curso)

---

## 📌 Sobre o Projeto

Este repositório reúne os exercícios práticos e atividades realizadas ao longo do curso **Praticando Python: Funções** da Alura. O objetivo é fixar o uso de funções em Python — desde a criação de funções básicas e personalizadas até conceitos mais avançados como recursividade, lambdas e closures.

---

## 📚 Conteúdo Aprendido

Ao longo do curso, foram abordados os seguintes temas:

- ✅ **O que são funções** e por que utilizá-las
- ✅ **Criação de funções personalizadas** com `def`
- ✅ **Parâmetros e retorno** de valores
- ✅ **Funções embutidas** do Python (`map`, `filter`, `zip`, `sorted`, `reversed`, etc.)
- ✅ **Funções recursivas** — funções que chamam a si mesmas com condição de parada
- ✅ **Funções anônimas (lambdas)** — funções curtas de uma única expressão
- ✅ **Closures** — funções internas que lembram do ambiente onde foram criadas

---

## 📁 Estrutura do Repositório

```
Laços de repetição/
│
├── README.md
├── funcoes_basicas.py        # Criação e uso de funções personalizadas
├── funcoes_embutidas.py      # map, filter, zip, sorted, reversed
├── funcoes_recursivas.py     # Exemplos de recursividade (fatorial, soma, etc.)
├── lambdas.py                # Funções anônimas (lambda)
└── closures.py               # Funções dentro de funções (closures)
```

> ⚠️ A estrutura acima pode variar de acordo com a organização dos arquivos no repositório.

---

## ⚙️ Pré-requisitos

Antes de executar os arquivos, certifique-se de ter instalado:

- [Python 3.x](https://www.python.org/downloads/)

Para verificar a versão instalada:

```bash
python --version
```

---

## 💡 Exemplos de Código

### Função personalizada

```python
def saudacao(nome):
    return f"Olá, {nome}! Bem-vindo ao Python."

print(saudacao("Eric"))  # Saída: Olá, Eric! Bem-vindo ao Python.
```

### Função recursiva — Fatorial

```python
def fatorial(n):
    if n == 0:
        return 1
    return n * fatorial(n - 1)

print(fatorial(5))  # Saída: 120
```

### Função lambda com `map`

```python
numeros = [1, 2, 3, 4, 5]
dobrados = list(map(lambda x: x * 2, numeros))
print(dobrados)  # Saída: [2, 4, 6, 8, 10]
```

### Closure

```python
def multiplicador(n):
    def multiplica(x):
        return x * n
    return multiplica

dobrar = multiplicador(2)
print(dobrar(5))  # Saída: 10
```

---

## 🎓 Curso

| Informação      | Detalhe                                                                 |
|-----------------|-------------------------------------------------------------------------|
| **Nome**        | Praticando Python: Funções                                              |
| **Plataforma**  | [Alura](https://www.alura.com.br)                                       |
| **Link**        | [Acessar curso](https://cursos.alura.com.br/course/praticando-python-funcoes) |
| **Carga horária** | 4 horas                                                               |
| **Atividades**  | 14 atividades                                                           |

---
