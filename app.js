function greet(firstname, lastname, language, ...other) {
    language = language || 'en';
    if( language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
        
    if( language === 'es') {
        console.log('Holla ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greetEnglish('jason','baisden');
greetSpanish('jason','baisden');



