var person = {
    firstname: 'default',
    lastname: 'default',
    getfullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// DON'T DO THIS EVER - FOR DEMO PURPOSES ONLY!
john.__proto__ = person;

console.log(john.getfullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getfullName());