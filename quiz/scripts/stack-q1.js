class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    this._persons.push(p); // Corrected: Push the person object into the _persons array
  }

  pop() {
    const person = this._persons.pop(); // Corrected: Pop the person object from the _persons array
    return person ? person.age : undefined; // Corrected: Return the age of the popped person object if it exists
  }

  get persons() {
    return this._persons; // Getter method to access the _persons array
  }
}

let pstack = new PStackImpl();
pstack.push({ name: 'Jojo', age: 21 });
pstack.push({ name: 'Gabi', age: 29 });
pstack.push({ name: 'Dein', age: 19 });
console.log(pstack.pop()); // Output: 19
console.log(pstack.pop()); // Output: 29
console.log(pstack.persons); // Output: [{ name: 'Jojo', age: 21 }]
