const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return this.firstName + ' ' + this.lastName }
}

let x = person.fullName();
console.log(x);
