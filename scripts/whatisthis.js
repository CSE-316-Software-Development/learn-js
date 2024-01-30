this.firstName = 'Han';
this.lastName = 'Ku';
const person = {
    firstName: 'Mary',
    lastName: 'Den',
    id: 5544,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    fullName2 : () => {
        return this.firstName + ' ' + this.lastName;
    }
}

const person2 = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(person.fullName());
console.log(person.fullName.call(person2));
console.log(person.fullName2());