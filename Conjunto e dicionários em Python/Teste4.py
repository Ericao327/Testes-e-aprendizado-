permissoes_principais = set(p.string() for p in input("Permissões principais: ").lower().split(', '))

permissoes_solicitadas = set(p.string() for p in input("Permissões solicitadas: ").lower().split(', '))

eh_subconjunto = permissoes_solicitadas.issubset(permissoes_principais)

if eh_subconjunto:
    print("As permissões solicitadas fazem parte das permissões principais.")
else:
    print("As permissões solicitadas não fazem parte das permissões principais.")
