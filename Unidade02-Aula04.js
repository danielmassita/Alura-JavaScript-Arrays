// 04 - ANIMAIS MARINHOS

/*
O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:*/

var animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')
console.log(animaisDoAquario)
/*
Analisando o código, selecione a alternativa que corresponde ao que teremos como saída do console do animaisDoAquario .

Selecione uma alternativa

A
[ '🐋', '🐠', '🐙', '🐟']

B
[ '🐋', '🐙', '🐠', '🐟','🦈']

C
[ '🐠', '🐙', '🐬', '🦈' ]

D
[ '🐠', '🐋', '🐟', '🐙', '🐬', '🦈' ]

ALTERNATIVA CORRETA = A
Alternativa correta! Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.

*/