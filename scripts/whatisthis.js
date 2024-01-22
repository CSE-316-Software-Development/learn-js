this.firstName = 'Han';
this.lastName = 'Ku';
const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5544,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.fullName());