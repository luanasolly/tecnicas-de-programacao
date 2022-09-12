//Criar a lista de 10 carros
let film = [
  {
      movie: "encantada",
      year: 2007,
      director: "kevin lima",
      free: true
  },
  {
      movie: "abracadraba",
      year: 1993,
      director: "kenny ortega",
      free: true

  },
  {
      movie: "o aprendiz de feiticeiro",
      year: 2010,
      director: "jon turteltaub",
      free: true
  },
  {
      movie: "como se fosse a primeira vez",
      year: 2004,
      director: "peter segal",
      free: true
  },
  {
      movie: "encantada",
      year: 2007,
      director: "kevin lima",
      free: true
  },
  {
      movie: "john wick",
      year: 2014,
      director: "derek kolstad",
      free: false
  },
  {
      movie: "viva - a vida é uma festa",
      year: 2018,
      director: "adrian molina",
      free: true
  },
  {
      movie: "truque de mestre",
      year: 2013,
      director: "louis leterrier",
      free: true
  },
  {
      movie: "familia addams",
      year: 2019,
      director: "conrad vernon",
      free: true
  },
  {
      movie: "frozen",
      year: 2014,
      director: "chris buck",
      free: true
  }]

  //Verifica se o carro é igual - Função do JS
  const isObjectEqual = (objA, objB) => {
      return JSON.stringify(objA) === JSON.stringify(objB);
  };
  filmDelete = isObjectEqual(film[0], film[4]) ? 'Filme repetido' : 'Filme diferente';
  console.log("Filme repetido", filmDelete);

  console.log("Filme a ser deletado",film.splice(4,1)); // corta o carro da posição 3 em diante, apenas uma posição
  console.log(film); // Mostra a lista de carro sem o carro repetido


  let position = 8;
  let cantRent = film[position].free;
  
  if (cantRent === true) 
  {
      // Mostra que o carro não pode alugar
      console.log("O filme", film[position], "pode alugar");
  }
  else
  {
      //Mostra que o carro pode ser alugado
      console.log("O filme", film[position], "Não Pode Alugar");
  }