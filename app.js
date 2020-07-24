// short hand for creating a new object
var tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 main st.',
        city: 'New York'
    }
};
greet(tony);

function greet(person) {
    console.log('Hi ' + person.firstname);
}
greet.language = 'english';
console.log(greet); //prints code of greet
console.log(greet.language);
