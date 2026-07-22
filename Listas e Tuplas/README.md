<div align="center">

#  Listas e Tuplas

*Exercícios práticos de listas e tuplas em Python, desenvolvidos durante o curso da Alura.*

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conceitos Abordados](#-conceitos-abordados)
- [Exercícios](#-exercícios)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Executar](#-como-executar)
- [Sobre o Curso](#-sobre-o-curso)

---

## 📌 Sobre o Projeto

Esta pasta reúne **10 exercícios práticos** sobre listas e tuplas em Python, desenvolvidos como parte do aprendizado no curso **Praticando Python: listas e tuplas** da [Alura](https://cursos.alura.com.br/course/praticando-python-listas-tuplas). Os exercícios exploram situações do cotidiano — controle de estoque, listas de convidados, registro de notas — para fixar o uso de métodos de lista, tuplas imutáveis e manipulação de coleções de forma aplicada.

---

## 🧠 Conceitos Abordados

| Conceito | Descrição |
|----------|-----------|
| Listas (`list`) | Estrutura de dados mutável para armazenar coleções de itens |
| Tuplas (`tuple`) | Estrutura de dados imutável, útil para dados que não devem ser alterados |
| Operador `in` | Verifica se um item pertence a uma lista |
| `list.sort()` | Ordena os elementos de uma lista |
| `list.append()` | Adiciona um item ao final da lista |
| `list.insert()` | Insere um item em uma posição específica |
| `list.remove()` | Remove a primeira ocorrência de um item |
| `list.pop()` | Remove e retorna o último item da lista |
| `list.reverse()` | Inverte a ordem dos elementos da lista |
| `list.index()` | Retorna a posição de um item na lista |
| Concatenação de tuplas (`+`) | Combina duas tuplas em uma nova |
| `str.split()` | Transforma uma string em lista a partir de um separador |
| List comprehension | Cria listas de forma concisa a partir de uma expressão |
| Laço `while` com `break` | Repetição controlada até uma condição de parada |
| Fatiamento com `range()` e passo | Percorre a lista em blocos de tamanho fixo |

---

## 📂 Exercícios

### Teste1.py — Verificação de Item na Despensa
Usa o operador `in` para verificar se um item já está presente na lista antes de sugerir a compra.

```python
despensa = ['arroz', 'feijão', 'óleo']
item = input("Digite o item que você quer verificar: ")
if item in despensa:
    print(f"O item {item} já está disponível na despensa.")
else:
    print(f"O item {item} precisa ser comprado.")
print(despensa)
```

---

### Teste2.py — Ordenação de Notas
Ordena uma lista de notas numéricas usando `sort()`.

```python
notas = [85, 70, 90, 60, 75]
print("Notas originais:", notas)

notas.sort()
print("Notas ordenadas:", notas)
```

---

### Teste3.py — Cadastro de Voluntários
Usa um laço `while` com `break` para adicionar nomes a uma lista até que o usuário decida encerrar.

```python
voluntarios = []

while True:
    nome = input("Digite o nome do voluntário (ou 'sair' para encerrar): ")
    if nome.lower() == 'sair':
        break
    voluntarios.append(nome)

print("\nVoluntários registrados:", voluntarios)
```

---

### Teste4.py — Combinação de Estoques com Tuplas
Cria duas tuplas a partir da entrada do usuário e as combina por concatenação.

```python
estoque1 = tuple(input("Produtos do estoque 1 (separados por vírgula): ").split(", "))
estoque2 = tuple(input("Produtos do estoque 2 (separados por vírgula): ").split(", "))
estoque_combinado = estoque1 + estoque2
print(f"Estoque combinado:\n{estoque_combinado}")
```

---

### Teste5.py — Inserção de Convidado em Posição Específica
Usa `insert()` para adicionar um novo convidado em uma posição escolhida pelo usuário.

```python
convidados = ['Ana', 'Pedro', 'Carlos']
print(f"Lista atual de convidados: {convidados}")
novo_convidado = input("Digite o nome do novo convidado: ")
posicao = int(input("Digite a posição na qual deseja inserir o convidado: "))
convidados.insert(posicao - 1, novo_convidado)
print(f"Lista atualizada de convidados: {convidados}")
```

---

### Teste6.py — Correção da Ordem de Eventos
Usa `reverse()` para corrigir a ordem de uma lista de eventos registrada de trás para frente.

```python
eventos_registrados = ['Encerramento', 'Palestra 3', 'Palestra 2', 'Abertura']

eventos_registrados.reverse()
print(f"Ordem corrigida: {eventos_registrados}")
```

---

### Teste7.py — Substituição de Nome na Lista de Resultados
Combina `index()`, `remove()` e `insert()` para localizar um nome incorreto e substituí-lo mantendo a posição original.

```python
resultados = ["Ana", "Carlos", "Pedro"]
print("Lista original:", resultados)

erro = input("Digite o nome incorreto: ")
if erro in resultados:
    correto = input("Digite o nome correto: ")
    posicao = resultados.index(erro)
    resultados.remove(erro)
    resultados.insert(posicao, correto)
    print(f"O nome {erro} foi substituído por {correto}.")
    print("Lista atualizada:", resultados)
else:
    print("Nome não encontrado.")
```

---

### Teste8.py — Remoção do Último Pedido
Usa `pop()` para remover o último item de uma lista de pedidos.

```python
pedidos = input("Pedidos feitos (separados por vírgula): ").split(", ")
pedidos.pop()
print("Pedidos finais:")
print(pedidos)
```

---

### Teste9.py — Cálculo da Média da Turma
Usa list comprehension para converter as notas em números e calcula a média com `sum()` e `len()`.

```python
notas = input("Digite as notas dos alunos separadas por vírgula: ").split(", ")
notas = [float(nota) for nota in notas]
media = sum(notas) / len(notas)
print(f"Média final da turma: {media:.2f}")
```

---

### Teste10.py — Cadastro de Alunos em Blocos
Percorre a lista em blocos de três posições com `range()` para separar nome, idade e nota de cada aluno.

```python
dados = input("Digite os dados do aluno no formato Nome, Idade, Nota separados por vírgula: ").split(", ")

for i in range(0, len(dados), 3):
    nome, idade, nota = dados[i], int(dados[i + 1]), float(dados[i + 2])
    print(f"Aluno: {nome}")
    print(f"Idade: {idade}")
    print(f"Nota: {nota}\n")
```

---

## 🗂️ Estrutura de Pastas

```
Listas e Tuplas/
├── Teste1.py    # Verificação de item na despensa com in
├── Teste2.py    # Ordenação de notas com sort()
├── Teste3.py    # Cadastro de voluntários com while/break
├── Teste4.py    # Combinação de estoques com tuplas
├── Teste5.py    # Inserção de convidado com insert()
├── Teste6.py    # Correção de ordem com reverse()
├── Teste7.py    # Substituição de nome com index()/remove()/insert()
├── Teste8.py    # Remoção do último pedido com pop()
├── Teste9.py    # Cálculo de média com list comprehension
└── Teste10.py   # Cadastro de alunos em blocos com range()
```

---

## ▶️ Como Executar

1. Certifique-se de ter o [Python 3](https://www.python.org/downloads/) instalado.
2. Clone o repositório ou baixe esta pasta.
3. Execute qualquer arquivo pelo terminal, por exemplo:

```bash
python Teste1.py
```

4. Siga as instruções exibidas no console para interagir com o programa.

---

## 🎓 Sobre o Curso

| Campo | Informação |
|-------|------------|
| **Curso** | [Praticando Python: listas e tuplas](https://cursos.alura.com.br/course/praticando-python-listas-tuplas) |
| **Plataforma** | [Alura](https://www.alura.com.br) |
| **Carga Horária** | 4 horas |
| **Atividades** | 14 |

---
