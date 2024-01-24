const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return person.firstName + ' ' + person.lastName }
}

let x = person.fullName();
console.log(x);
