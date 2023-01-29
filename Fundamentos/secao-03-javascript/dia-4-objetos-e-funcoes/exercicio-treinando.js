let player = {
   pessoa :'Marta',
    lastPessoa : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
}

console.log('A jogadora ' + player.pessoa + ' ' + player.lastPessoa + ' tem ' + player.age + ' de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log('A jogadora ' + player['pessoa'] + ' ' + player['lastPessoa'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
}

    for (let index in names) {

    console.log('Olá', names[index])
  };

  

  