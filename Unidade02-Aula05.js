// 05 - CONECTANDO ARRAYS 

// Desafio: Juntando as Salas - Haverá uma palestra sobre padrões de projetos para as alunas das salas de JavaScript e Python. Junte ambas as salas em uma única lista que exiba todas as alunas. 

const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaDePython.concat(salaDeJavaScript); // O .concat() não altera a lista original... Por isso, atribuímos uma nova variável pra "concatenar" as listas A + B. 
console.log(salasUnificadas);
console.log(salaDePython);
console.log(salaDeJavaScript);

