import numpy as npy
data =[]
berhenti = False
i=0

while (not berhenti):
    print('masukan elemen ke [',i,']:', end='')
    x=input()
    data.append(x)
    i+=1

    inputan=input('Mau isi data lagi [Yes or no] : ').lower()
    if (inputan=='no'):
        berhenti = True
print('-'*30)
print('Elemen array yang dimasukan : {}'.format(len(data)))
print('-'*30)
print(npy.array(data))