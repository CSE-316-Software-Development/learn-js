//node scripts/stack-q.js
class PStack {
  #id;
  constructor() {
    this.#id = Math.floor(Math.random() * 100) + 1;
  }

  showId() {
    console.log(this);
    return this.#id;
  }

  getId() {
    return this.#id;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
    this.persons = [];
  }
  push(p) {
    return this.persons.push(p);
  }

  pop() {
    return this.persons.pop().age;
  }

  show() {
    return this.persons;
  }

  showId() {
    console.log(this);
    return this.getId;
  }
}

let pstack = new PStackImpl();
pstack.push({ name: "Jojo", age: 21 });
pstack.push({ name: "Gabi", age: 29 });
pstack.push({ name: "Dein", age: 19 });
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.showId());
