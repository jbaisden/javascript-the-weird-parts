var a = "hello world";
var myVar = 1;


function b() {
    myVar = 2;
    console.log(myVar);
    console.log(this);
    function f1() {
        myVar = 3;
        console.log(f1);
    }

    f1();

}

b();


