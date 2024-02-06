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
    return this._persons.push(p);
  }

  pop() {
    return this._persons.pop().age;
  }

  get persons() {
    return this._persons;
  }

  set persons(person) {
    this._persons = person;
  }
}

let pstack = new PStackImpl();
pstack.persons = [
  { name: "Jojo", age: 21 },
  { name: "Gabi", age: 29 },
]; // Created an array with two objects in it
// Now it is calling the setter method
pstack.push({ name: "Dein", age: 19 }); // This actually created an person object
console.log(pstack.pop()); // removed
console.log(pstack.pop()); // the stack is empty now
console.log(pstack.persons);
