// 1. Criar uma lista de hobbies
const hobbies = ['jogar', 'tocar guitarra', 'desenhar'];

// 2. Mostrar a lista de hobbies
console.log('Meus hobbies:');
console.log(hobbies);

// 3. Mostrar cada hobby separadamente
console.log('Meus hobbies separadamente:');
console.log(hobbies[0]); // Primeiro hobby
console.log(hobbies[1]); // Segundo hobby
console.log(hobbies[2]); // Terceiro hobby

// 4. Reinventando um hobby
hobbies[0] = 'ler livros'; // Substituir o primeiro hobby
console.log('Minha lista de hobbies atualizada:');
console.log(hobbies);

// 5. Contar quantos hobbies existem
console.log('Número de hobbies na minha lista: ' + hobbies.length);

// 6. Adicionar um novo hobby
hobbies.push('cozinhar'); // Adicionar um novo hobby
console.log('Minha lista de hobbies atualizada com um novo hobby:');
console.log(hobbies);

// 7. Remover o último hobby
hobbies.pop(); // Remover o último hobby
console.log('Minha lista de hobbies após remover o último:');
console.log(hobbies);

// 8. Remover um hobby específico
const hobbyToRemove = 'tocar guitarra';
const indexToRemove = hobbies.indexOf(hobbyToRemove);
if (indexToRemove > -1) {
  hobbies.splice(indexToRemove, 1); // Remover um hobby pelo nome
  console.log('Minha lista de hobbies após remover ' + hobbyToRemove + ':');
  console.log(hobbies);
}

// 9. Juntar com os hobbies de um amigo
const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar violão'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
console.log('Nossos hobbies juntos:');
console.log(todosOsHobbies);

// 10. Criar categorias de hobbies
const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];
console.log('Hobbies Musicais:');
console.log(categoriasDeHobbies[0]);