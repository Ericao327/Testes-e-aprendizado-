# 🐍 Praticando Python: Funções

<div align="center">

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Alura](https://img.shields.io/badge/Alura-Curso-0747a6?style=for-the-badge&logo=alura&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

<br/>

> Repositório com os exercícios e atividades desenvolvidos durante o curso **Praticando Python: Funções** da [Alura](https://cursos.alura.com.br/course/praticando-python-funcoes).

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

## ▶️ Como Executar

1. **Clone o repositório:**

```bash
git clone https://github.com/Ericao327/Testes-e-aprendizado-.git
```

2. **Acesse a pasta do projeto:**

```bash
cd "Testes-e-aprendizado-/Laços de repetição"
```

3. **Execute um arquivo Python:**

```bash
python nome_do_arquivo.py
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
| **Avaliação**   | 9,2 / 10                                                                |
| **Escola**      | Programação                                                             |

---

## 👩‍🏫 Autora do Curso

<div align="center">

| [<img src="https://cdn2.gnarususercontent.com.br/1/1244760/cfdc5ab6-6585-4bf9-9e2d-d81a8171b89f.jpg" width="100px" style="border-radius:50%"/><br/><b>Laís Urano</b>](https://br.linkedin.com/in/la%C3%ADs-urano-9a41451b3) |
|---|
| Instrutora da Escola de Programação da Alura.<br/>Formada em Engenharia Elétrica pela UFPI.<br/>[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/la%C3%ADs-urano-9a41451b3) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/uranolais) |

</div>

---

<div align="center">

Feito com 💙 por **Eric** durante os estudos na [Alura](https://www.alura.com.br)

</div>
