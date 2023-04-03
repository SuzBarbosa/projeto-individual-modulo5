import chalk from 'chalk'
import readLineSync from 'readline-sync'

const properties = [];
let input = '';
while (input !== 'SAIR') {
  input = prompt('Insira uma propriedade de CSS (ou SAIR para sair):');
  if (input !== 'SAIR') {
    properties.push(input);
  }
}
properties.sort();
for (let i = 0; i < properties.length; i++) {
  console.log(properties[i]);
}
