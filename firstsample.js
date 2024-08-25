var x = 10.4;
var str = "Suresh Karthika";
var isvalid = false;
var a1 = "xyz";
a1 = 10;
var b1 = "xyz";
b1 = 10;
//Unknown data type can be assigmned to unknown
var s = a1;
console.log(x);
console.log(str);
console.log(isvalid);
//Running typscript code need tyscript compiler is (Node js) Node Package Manager(NPM)
//Node Package Manager - The command allows you to download the packages from repositry
// It Resolved inter dependency
var x1 = 10; // Blocked Scope
var y1 = 100; // function or global scope
if (true) {
    var x1_1 = 20;
    var y1 = 200;
    console.log(x1_1);
    console.log(y1);
}
console.log(x1);
console.log(y1);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(c1);
var c1 = 100;
