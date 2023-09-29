
#Feliz_Março_Mulher

import re
frases=["marco","marcondes","macro","masco"]
padrão= '^m...o$'
for palavras in frases:
    resultado=re.match(padrão,palavras)
    if resultado:
         print('encontrei')
    else:
         print('não encontrei')     
################

import re
padrão= r"ma"
texto=r"marco,vamos fazer um teste. Primeiro marco as palavras e depois envio ao marcondes o texto que ira amassar o texto"
saída=re.findall(padrão,texto)
print("saída: ",saída)

#################


import re
padrão= r"ma"
texto=r"marco,vamos fazer um teste. Primeiro marco as palavras e depois envio ao marcondes o texto que ira amassar o texto"
saída=re.search(padrão,texto)
print("saída1 ", saída )
print("saída2 ", saída[0])

################

import re
padrão= r"ma"
texto=r"marco,vamos fazer um teste. Primeiro marco as palavras e depois envio ao marcondes o texto que ira amassar o texto"
saída=re.finditer(padrão,texto)
for match in saída:
    
    print("saída ", match.span ())
    
    
    ###################
    
import re
padrão= "os"
texto=r"aos poucos vamos entendendo os diferentes metodos"
saída=re.split(padrão,texto)
i=1
for pedaco in saída:
    print('split{0}:{1}'.format(i,pedaco))
    i+=1
###########################
    
import re
texto=r"aos poucos vamos entendendo os diferentes metodos"
origem= 'diferentes'
subst='varios'
saida=re.sub(origem,subst,texto)
print("Antes: ",texto)
print("Depois: ",saida)
    


