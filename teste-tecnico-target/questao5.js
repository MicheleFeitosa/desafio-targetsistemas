// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse


const palavrasString = 'aqui está a string'; 

// fazer um loop para ler string de tras pra frente 

 let palavrasInvertidas = '';

 for (let index = palavrasString.length -1; index >= 0; index--) {
    const letra = palavrasString[index];
    palavrasInvertidas = palavrasInvertidas + letra;
 }

 console.log(palavrasInvertidas);

