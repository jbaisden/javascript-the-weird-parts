
// var g = G$('John', 'Doe');
// console.log(g);
// console.log(g.greet().setLanguage('es').greet(true));
// console.log($);


$(window).ready(function() {
    $("#formalSelection").on('change',  function() {
        console.log("changing greeting. Formal?: " + $('#formalSelection option:selected').val());
        console.log( $('#formalSelection option:selected').val() );
        var g = G$( $('#firstname').val(), $('#lastname').val(), $('#lang').val(), $('#formalSelection option:selected').val() );
        g.HTMLGreeting('#greeting');
        console.log(g);
    });

    $("#lang").on('change',  function() {
        console.log("changing language. Lang: " + $('#lang').val() );
        console.log( $('#lang').val() );
        var g = G$( $('#firstname').val(), $('#lastname').val() , $('#lang').val(), $('#formalSelection  option:selected').val() );
        g.HTMLGreeting('#greeting');
    });    
});

