/*
07 - Faça como eu fiz: Métodos callback

Nesta aula introduzimos um novo conceito, o de funções callback.

O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como JavaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays. Porém a estrutura da função se mantém similar.

Crie um novo arquivo index.js e crie uma array de números:*/

var arrayNums = [1, 2, 3, 4];
console.log(arrayNums);

/* Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():*/

function multiplicaPorDez(num) {
    return num * 10
};

// Agora podemos chamar o map() para fazer a operação:

var arrayMultiplicada = arrayNums.map(multiplicaPorDez); // A função não PRECISOU de parâmetros (multiplicaPorDez()). Vai-se atribuir uma nova arrayMultiplicada, e o .map() vai percorrer cada item chamando e atribuindo a função multiplicaPorDez(). 
console.log(arrayMultiplicada);
console.log(' ');

/*O resultado no terminal deve ser [ 10, 20, 30, 40 ].

IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que está aconteceu aqui?

Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():*/

console.log(arrayNums);
var arraySomada = arrayNums.map(num => num * 10);
console.log(arraySomada);

/*No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

Por isso quando utilizamos uma função externa como callback de um map() não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos. Você pode ver outros exemplos no MDN.

08 - O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos:
Mais detalhes sobre como trabalhar com métodos callback, como o map() para percorrer arrays.
*/
