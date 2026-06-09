<div align="center">

#  Condicionais em Python

*Exercícios práticos de estruturas condicionais em Python, desenvolvidos durante o curso da Alura.*

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conceitos Abordados](#-conceitos-abordados)
- [Exercícios](#-exercícios)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Executar](#-como-executar)
- [Sobre o Curso](#-sobre-o-curso)
- [Autor](#-autor)

---

## 📌 Sobre o Projeto

Esta pasta reúne **13 exercícios práticos** sobre estruturas condicionais em Python, desenvolvidos como parte do aprendizado no curso **Praticando Python: funções** da [Alura](https://cursos.alura.com.br/course/praticando-python-funcoes). Os exercícios exploram situações do cotidiano — cálculo de IMC, controle orçamentário, sistemas de notas — para fixar o uso de `if`, `elif` e `else` de forma aplicada.

---

## 🧠 Conceitos Abordados

| Conceito | Descrição |
|----------|-----------|
| `if / elif / else` | Tomada de decisão com múltiplas ramificações |
| Operador `and` | Condição verdadeira somente quando ambas as partes são verdadeiras |
| Operador `or` | Condição verdadeira quando pelo menos uma parte é verdadeira |
| Operador `not` | Negação de uma condição |
| Operadores de comparação | `>`, `<`, `>=`, `<=`, `==`, `!=` |
| Operador módulo `%` | Verificação de paridade (par/ímpar) |
| Condicionais aninhadas | `if` dentro de outro `if` para lógicas compostas |
| f-strings | Formatação de saída com variáveis embutidas |

---

## 📂 Exercícios

### Teste1.py — Verificação de Nome
Compara o valor de uma variável com strings específicas usando `if / elif / else`.

```python
nome = "Alura"

if nome == "Alura":
    print("Bem-vindo à Alura!")
elif nome == "Latam":
    print("Bem-vindo à Latam!")
else:
    print("Nome desconhecido.")
```

---

### Teste2.py — Controle de Acesso por Idade e Documento
Usa o operador `and` para verificar duas condições simultaneamente.

```python
idade = int(input("Informe sua idade: "))
tem_documento = input("Tem documento? (sim/não): ")

if idade >= 18 and tem_documento == "sim":
    print("Entrada permitida!")
else:
    print("Entrada negada.")
```

---

### Teste3.py — Verificação de Folga
Usa o operador `or` para liberar o descanso caso uma das condições seja atendida.

```python
feriado = input("Hoje é feriado? (sim/não): ")
folga = input("Você tem folga hoje? (sim/não): ")

if feriado == "sim" or folga == "sim":
    print("Você pode descansar hoje!")
else:
    print("Dia normal de trabalho.")
```

---

### Teste4.py — Comparação de Vendas
Compara dois valores inteiros para determinar qual produto vendeu mais.

```python
macas = int(input("Digite a quantidade de maças vendidas: "))
bananas = int(input("Digite a quantidade de bananas vendidas: "))

if macas > bananas:
    print("As maças tiveram mais vendas.")
elif bananas > macas:
    print("As bananas tiveram mais vendas.")
else:
    print("As vendas foram iguais.")
```

---

### Teste5.py — Validação e Soma de Atividades
Garante que os valores informados sejam não-negativos antes de somá-los.

```python
atividade_A = int(input("Informe os dias para a atividade A: "))
# ...
if (atividade_A >= 0 and atividade_B >= 0 and atividade_C >= 0):
    tempo_total = atividade_A + atividade_B + atividade_C
    print(f"O tempo total do projeto é de {tempo_total} dias.")
else:
    print("Erro: os dias não podem ser negativos.")
```

---

### Teste6.py — Alerta de Temperatura
Emite um alerta se a temperatura ultrapassar o limite seguro.

```python
temperatura = float(input("Digite a temperatura atual: "))

if temperatura > 25:
    print("Alerta! Temperatura acima do limite permitido.")
else:
    print("Temperatura dentro do limite seguro.")
```

---

### Teste7.py — Cálculo de IMC
Calcula o Índice de Massa Corporal e classifica o resultado em três faixas.

```python
imc = peso / (altura ** 2)

if imc < 18.5:
    print("Você está abaixo do peso.")
elif imc < 25:
    print("Você está com peso normal.")
else:
    print("Você está acima do peso.")
```

---

### Teste8.py — Controle de Orçamento
Verifica se as despesas mensais ultrapassaram um limite pré-definido.

```python
limite = 3000.0
if despesas > limite:
    print("Atenção! Você ultrapassou o limite do orçamento.")
else:
    print("Você está dentro do orçamento.")
```

---

### Teste9.py — Controle de Acesso por Horário
Permite o acesso apenas dentro do intervalo de expediente (8h às 18h).

```python
if 8 <= hora_atual < 18:
    print("Acesso permitido.")
else:
    print("Acesso negado.")
```

---

### Teste10.py — Sistema de Notas
Calcula a média de três notas e classifica o aluno em aprovado, recuperação ou reprovado.

```python
media = (nota1 + nota2 + nota3) / 3

if media >= 7:
    print("Aprovado")
elif 5 <= media < 7:
    print("Recuperação")
else:
    print("Reprovado")
```

---

### Teste11.py — Cálculo de Pedágio por Distância
Define o valor do pedágio com base em faixas de distância percorrida.

```python
if distancia <= 100:
    print("Valor do pedágio: R$ 10,00")
elif 100 < distancia <= 200:
    print("Valor do pedágio: R$ 20,00")
else:
    print("Valor do pedágio: R$ 30,00")
```

---

### Teste12.py — Par ou Ímpar
Usa o operador módulo `%` para determinar a paridade de um número inteiro.

```python
if numero % 2 == 0:
    print("O número é par.")
else:
    print("O número é ímpar.")
```

---

### Teste13.py — Análise de Crédito
Avalia a renda e o valor da parcela para aprovar ou negar um empréstimo.

```python
if renda > 2000 and parcela <= 0.3 * renda:
    print("Empréstimo aprovado!")
elif renda <= 2000:
    print("Empréstimo negado: renda insuficiente.")
else:
    print("Empréstimo negado: parcela acima de 30% da renda.")
```

---

## 🗂️ Estrutura de Pastas

```
Condicionais em Python/
├── Teste1.py    # Verificação de nome com if/elif/else
├── Teste2.py    # Controle de acesso com and
├── Teste3.py    # Verificação de folga com or
├── Teste4.py    # Comparação de vendas
├── Teste5.py    # Validação e soma de atividades
├── Teste6.py    # Alerta de temperatura
├── Teste7.py    # Cálculo de IMC
├── Teste8.py    # Controle de orçamento
├── Teste9.py    # Controle de acesso por horário
├── Teste10.py   # Sistema de notas
├── Teste11.py   # Cálculo de pedágio
├── Teste12.py   # Par ou ímpar
└── Teste13.py   # Análise de crédito
```

---

---

## 🎓 Sobre o Curso

| Campo | Informação |
|-------|------------|
| **Curso** | [Praticando Python: funções](https://cursos.alura.com.br/course/praticando-python-funcoes) |
| **Plataforma** | [Alura](https://www.alura.com.br) |
| **Carga Horária** | 4 horas |
| **Atividades** | 14 |

---

