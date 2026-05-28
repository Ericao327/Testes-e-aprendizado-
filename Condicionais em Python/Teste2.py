idade = int(input("Informe sua idade: "))
tem_documento = input("Tem documento? (sim/não): ")

if idade >= 18 and tem_documento == "sim":
    print("Entrada permitida!")
else:
    print("Entrada negada.")