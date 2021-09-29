class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    this.role = role;
    super(firstName, lastName);
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);