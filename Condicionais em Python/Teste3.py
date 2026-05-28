feriado = input("Hoje é feriado? (sim/não): ")
folga = input("Você tem folga hoje? (sim/não): ")

if feriado == "sim" or folga == "sim":
    print("Você pode descansar hoje!")
else:
    print("Dia normal de trabalho.")