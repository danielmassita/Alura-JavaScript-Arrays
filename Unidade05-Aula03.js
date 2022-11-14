/*
03 - Retorno do filter

Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.

Selecione a alternativa que representa o que deve ser retornado da função callback para que o método filter funcione:

A - A função callback não precisa de um retorno.
Esta não é a alternativa correta, já que o método filter precisa de um retorno da função callback para poder criar o array de retorno.

B - Um elemento.
Este não é o retorno correto. O próprio método se encarrega de colocar o elemento no novo array caso o retorno da função esteja correto.

C - Um booleano. - CORRETA!!!!! 
Alternativa correta! Certo! Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.

D - Um índice.
Este não é o retorno correto. O método filter vai colocar os elementos na mesma ordem em que eles se encontravam no array original, porém sem os elementos filtrados.
*/