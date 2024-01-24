function foo(sum, x, y) {
 return sum(x,y);
}

function sum(a,b) {
 return a + b;
}

console.log(foo(sum,2,3));
