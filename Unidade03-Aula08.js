/*
08
Faça como eu fiz: Loops em matrizes
PRÓXIMA ATIVIDADE

Vimos como usar os loops para percorrer um array utilizando o for:
*/
const notas = [10, 6.5, 8, 7.5]
let média0 = 0


for (let h = 0; h < notas.length; h++) {
  média0 += notas[h]/notas.length;
}

console.log(média0)
/*
Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.

Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.
*/

//const notas1 = [10 , 6.5, 8 ,7.5]
//const notas2 = [9  , 6  , 6]
//const notas3 = [8.5, 9.5]
//
//const notasGerais = [notas1,notas2,notas3]
//
//let média = 0

/*
Com a matriz criada. vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

Então ficamos com o seguinte código:

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)COPIAR CÓDIGO
No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10?

O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.
*/
const notas1 = [10, 6.5, 8 ,7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3];

let média = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    média += notasGerais[i][j]/notasGerais[i].length;
  }
}

média = média/notasGerais.length

console.log(média)

/*
Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.


09
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos como:
Utilizar mais métodos, tais quais indexOf() e includes() para percorrer arrays e comparar resultados;
Utilizar a estrutura for e entender seu funcionamento;
Substituir o for por métodos de array mais modernos do JavaScript, como forEach().

*/