function buildFunctions() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            //Note the function is not executed here. The loop will finish and i will be set to 3 when it does.
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

function buildFunctions2() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        //es6 'let' keyword scopes the value to the current execution block (curly braces)
        //so each time the loop is run a new variable is created in memory
        let j = i; 
        arr.push(
            //Note the function is not executed here. The loop will finish and i will be set to 3 when it does.
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}

//How to do this prior to es6....with IIFE
function buildFunctions3() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}


var fs = buildFunctions();
var fs2 = buildFunctions2();
var fs3 = buildFunctions3();


fs3[0](); // prints 3 
fs3[1](); // prints 3 
fs3[2](); // prints 3 

fs[0](); // prints 3 
fs[1](); // prints 3 
fs[2](); // prints 3 


fs2[0](); // prints 3 
fs2[1](); // prints 3 
fs2[2](); // prints 3 