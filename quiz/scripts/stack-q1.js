class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  get persons() {
    return this._persons.slice();
  }

  addPerson(person) {
    this._persons.push(person);
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    if (this.persons.length === 0) {
      console.error('No persons to pop.');
      return NaN;
    }
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
