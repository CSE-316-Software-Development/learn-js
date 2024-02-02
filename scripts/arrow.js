// this.firstname = 'Jane', then return: Jane undefined
const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName } // undefined undefined
        // if changed to original function(), return: Grace Hopper
    }
}

let x = o.person.fullName();
console.log(x);
  
