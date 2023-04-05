function Test() {
    this.a = 1;
}




console.log('hello');
console.log(Test.prototype);
//构造函数有 prototype 属性
/* 
构造函数有 prototype 属性，prototype也是一个对象，对象拥有 __proto__

*/

function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );

var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log( doSomeInstancing );

/* var doSomething = function(){};
console.log( doSomething.prototype ); */