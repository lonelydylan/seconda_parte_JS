const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

// A differenza di quando si prova a copiare una variabile
// con gli oggetti si va a richiamare la stessa allocazione nella memoria
// quindi è buona abitudine capire se ciò che sto facendo mi servirà
// in futuro o sia un equivalente del _ in python )
// (scusate sono due linguaggi molto simili e mi ci sto abituando nel dimenticarlo!)
console.log(person1);
console.log(person2);