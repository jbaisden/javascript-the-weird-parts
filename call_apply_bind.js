var person = {
    firstName: 'jason',
    lastname: 'baisden',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastname;
        return fullName;
    }
}


var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() );
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}

var logPersonName = logName.bind(person);
logPersonName();
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);


//function borrowing
var person2 = {
    firstName: 'jason2',
    lastname: 'baisden2',
}

//person object has the getFullName method but person2 does not
console.log(person.getFullName.apply(person2));

//function currying
function multiply(a,b) {
    return a * b;
}

//permenantly sets parameter a to 2
var multiplyByTwo = multiply.bind(this, 2);

//3 is passed as the parameter b since a was already set above
console.log(multiplyByTwo(3));