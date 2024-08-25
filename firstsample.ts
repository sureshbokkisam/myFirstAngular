var x: any = 10.4;
var str: any = "Suresh Karthika";
var isvalid: boolean = false;
var a1: any = "xyz";
a1 = 10;
var b1: unknown = "xyz";
b1 = 10;

//Unknown data type can be assigmned to unknown
var s: number = a1;

console.log(x);
console.log(str);
console.log(isvalid);

//Running typscript code need tyscript compiler is (Node js) Node Package Manager(NPM)

//Node Package Manager - The command allows you to download the packages from repositry
// It Resolved inter dependency

let x1: number = 10; // Blocked Scope
var y1: number = 100; // function or global scope

if (true) {
  let x1: number = 20;
  var y1: number = 200;

  console.log(x1);
  console.log(y1);
}
console.log(x1);
console.log(y1);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
//console.log(c1);
//var c1=100;


