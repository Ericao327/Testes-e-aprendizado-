<div align="center">

#  Praticando Python: Laços `for` e `while`

<p>Repositório de exercícios práticos sobre laços de repetição em Python, desenvolvidos durante o curso da Alura.</p>

</div>

---

## 📋 Sobre o Projeto

Este repositório reúne os exercícios e atividades práticas desenvolvidos durante o curso **"Praticando Python: laços for e while"** da [Alura](https://www.alura.com.br). O foco é consolidar o entendimento sobre estruturas de repetição — os laços `for` e `while` — por meio de exemplos e desafios aplicados.

---

## 📚 Conteúdo do Curso

O curso aborda os seguintes tópicos:

### 🔄 Laço `for`
Utilizado quando **sabemos exatamente quantas iterações** serão realizadas. Percorre uma coleção de itens (lista, tupla, dicionário etc.) um elemento por vez.

```python
nomes = ["Carlos", "Ana", "Pedro", "Maria"]

for nome in nomes:
    print(nome)
```

### 🔁 Laço `while`
Utilizado quando **não sabemos quantas iterações** serão necessárias. Executa um bloco de código enquanto uma condição for verdadeira.

```python
contador = 0

while contador < 5:
    print(f"Contador atual: {contador}")
    contador += 1
```

### ⚠️ Loop Infinito
Ocorre quando a condição de parada nunca se torna falsa. É um erro comum ao usar `while` sem atualizar a variável de controle.

```python
# CUIDADO: Loop infinito!
contador = 0
while contador < 5:
    print("Contador:", contador)
    # Faltou: contador += 1
```

### 🛑 `break` — Interrompendo o laço
Permite sair de um laço antes que ele termine naturalmente, mesmo que a condição ainda seja verdadeira.

```python
nomes = ["PM3", "Alura", "Latam", "Outros"]

for nome in nomes:
    if nome == "Alura":
        print("Nome encontrado! Saindo do laço.")
        break
    print(nome)
```

### ⏭️ `continue` — Pulando uma iteração
Ignora o restante do código na iteração atual e avança para a próxima.

```python
nomes = ["PM3", "Alura", "Latam", "Outros"]

for nome in nomes:
    if nome == "Alura":
        print("Ignorando Alura.")
        continue
    print(f"Nome: {nome}")
```

### 🔢 Funções úteis: `len()` e `range()`

| Função | Descrição | Exemplo |
|--------|-----------|---------|
| `len()` | Retorna o número de elementos de uma coleção | `len(["a", "b", "c"])` → `3` |
| `range()` | Gera uma sequência numérica para iteração | `range(6)` → `0, 1, 2, 3, 4, 5` |

### ⚖️ Operadores de Comparação

| Operador | Conceito | Exemplo |
|----------|----------|---------|
| `>` | Maior que | `x > 10` |
| `<` | Menor que | `x < 10` |
| `==` | Igual a | `x == 10` |
| `!=` | Diferente de | `x != 10` |
| `>=` | Maior ou igual a | `x >= 10` |
| `<=` | Menor ou igual a | `x <= 10` |

---

## 🗂️ Estrutura do Repositório

```
Funções-em-Python/
├── README.md
└── exercicios/       # Atividades práticas do curso
```

---

## ✅ Checklist de Aprendizado

- [x] Sintaxe e funcionamento do laço `for`
- [x] Sintaxe e funcionamento do laço `while`
- [x] Uso do `break` para interromper laços
- [x] Uso do `continue` para pular iterações
- [x] Prevenção e identificação de loops infinitos
- [x] Uso das funções `len()` e `range()`
- [x] Operadores de comparação em condições de laço

---

## 🎓 Curso

| | |
|---|---|
| **Plataforma** | [Alura](https://www.alura.com.br) |
| **Curso** | [Praticando Python: laços for e while](https://cursos.alura.com.br/course/praticando-python-lacos-for-while) |
| **Instrutor** | [André Santana](https://www.linkedin.com/in/almsantana/) |
| **Escola** | Programação |

---

<div align="center">
  <sub>Desenvolvido durante os estudos na <a href="https://www.alura.com.br">Alura</a> • #AprendiNaAlura</sub>
</div>
