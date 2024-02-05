class PStack {
  #id;  // '#' -> private field name
  constructor() {
    this.#id = Math.floor(Math.random() * 100) + 1;
  }

  showId() {
    console.log(this);
    return this.#id;
  }

  push(p) {
<<<<<<< HEAD

  }

  pop() {

=======
    // implement in child class
  }

  pop() {
    // implement in child class
>>>>>>> 60ad76f93bf67f0550282e84b19b906cb9f3b603
  }

}

class PStackImpl extends PStack {
<<<<<<< HEAD
  #persons = [];
=======
  #persons = []
>>>>>>> 60ad76f93bf67f0550282e84b19b906cb9f3b603
  constructor() {
    super();
  }
  push(p) {
    return this.#persons.push(p)
  }

  pop() {
    return this.#persons.pop().age
  }

  show() {
    return this.#persons
  }

}

let pstack = new PStackImpl();
pstack.push({name: 'Jojo', age: 21});
pstack.push({name: 'Gabi', age: 29});
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.showId());
