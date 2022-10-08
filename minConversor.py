import os

'''
FEITO PELA THALIA :D

FIQUEI COM PREGUIÇA DE CRIAR UM LINK PARA CADA IMAGEM
ENTÃO ESSE PROGRAMA SERVE PARA FAZER ISSO, ELE IRÁ ABRIR A PASTA
ENTÃO LISTAR O NOME DE CADA ARQUIVO E CRIANDO O SEU RESPECTIVO LINK
'''

pasta = input('Endereço da pasta: ')
prefixo = input('Prefixo: ')
sufixo = input('Sufixo: ')
print("\nRESULTADO")
for diretorio, subpastas, arquivos in os.walk(pasta):
    print("\tTotal:",len(arquivos),"\n")
    for arquivo in arquivos:
        #print(os.path.join(os.path.realpath(diretorio), arquivo))
        print(prefixo + arquivo + sufixo)