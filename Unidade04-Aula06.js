/*
06 - forEach e map

Agora já vimos mais sobre as funções callback e o método map() que utiliza essas funções, também vimos anteriormente sobre o método forEach().

Selecione a alternativa que representa a diferença entre o método map() e forEach():

A - O tamanho mínimo do array.
Esta não é a diferença, os métodos não têm limites mínimos para o tamanho dos arrays, podendo ser executados inclusive em arrays que não tenham nenhum elemento, também conhecidos como arrays vazios, []. Porém, nesse caso não será realizada nenhuma iteração.

B - Os parâmetros que podemos utilizar.
Esta não é a diferença, ambos os métodos aceitam apenas uma função como parâmetro, e passam o elemento, o índice e o array atual como parâmetros disponíveis para a função informada.

C - O retorno do método. - CORRETA! 
Alternativa correta! Certo! Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.

D - O tipo de função que pode ser utilizada.
Esta não é a diferença, ambos os métodos recebem uma função callback e ela, por sua vez, pode realizar qualquer conjunto de operações, sejam matemáticas, com alguma tomada de decisão e assim por diante.
*/