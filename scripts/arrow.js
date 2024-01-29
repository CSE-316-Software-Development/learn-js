this.firstName = 'Alan'
const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return this.firstName + ' ' + this.lastName }
const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName }
    }
}

let x = o.person.fullName();
console.log(x);

// don't use arrow function with (this) inside the object
// they inherit this of its lexical scope

// lexical scope: the parent scope of current scope
