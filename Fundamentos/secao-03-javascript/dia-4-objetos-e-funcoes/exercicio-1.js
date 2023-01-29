    //Exercício 1
    
    // Dando Boas vindas ao personagem:
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        };
        
    console.log('Bem-vinda, ', info.personagem)

    //Inserindo uma informção:

        info['recorrente'] = 'sim'
    console.log(info);

    //Imprimindo no console as chaves:

     for(let key in info) {
        console.log(key);
       }

    // Imprimindo no console o valor das chaves:

        for(let key in info) {
           console.log(info[key])
       }

    //Inserindo informações junto com outras informações em um objeto: (Uso de for in e condiciona)

       let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
      };

        for(let propriedades in info) {
            if(propriedades === 'recorrente' && info[propriedades] === 'sim' && info2[propriedades] === 'sim') {

                console.log('Ambos recorrentes');

        } else {

            console.log(info[propriedades] + ' e ' + info2[propriedades]);
        }
    }

    //Exercício 2 

    //Imprimir no console acessando uma posição o-do objeto que é um array.

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
    }

    console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

    //Adicionar dentro do array no objeto mais um array:

    leitor.livrosFavoritos.push(
        {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
      );

      console.log(leitor);

      // Contar quantos livros favoritos Julia tem:

      console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

     