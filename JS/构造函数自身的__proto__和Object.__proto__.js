/**
 * 总结：
 * 1.所有构造器/函数的__proto__都指向Function.prototype，它是一个空函数（Empty function）：说明所有的构造器
 *   都来自于Function.prototype，甚至包括根构造器Object及Function自身。所有构造器都继承了Function.prototype
 *   的属性及方法，如：length、call、apply、bind
 * 2.Function.prototype.__proto__===Object.prototype  //true
 * 3.所有对象的__proto__都指向其构造函数的prototype
 * 4.箭头函数的__proto__也是指向Function.prototype(箭头函数没有原型，所以不能用做构造函数进行实例化)
 */

//构造函数
function Person(name){
    this.name=name
}

let p=new Person('hello');

console.log(p.__proto__);    //Person.prototype    
console.log(Person.prototype.__proto__);  //Object.prototype
console.log(p.__proto__.__proto__);  //Object.prototype
console.log(Person.prototype.constructor); //function Person(name){this.name=name}
console.log(p.__proto__.constructor); //function Person(name){this.name=name}
//p.__proto__.constructor===Person
console.log(p.__proto__.constructor.prototype);  //带有constructor函数的对象
console.log(p.__proto__.constructor.prototype.__proto__);   //Object.prototype

console.log(Person.__proto__);    //f(){native code}  空函数

//Object
console.log(Object.__proto__);    //f(){native code}  空函数  
console.log(Person.__proto__===Function.prototype);    //true
console.log(Object.__proto__===Function.prototype);    //true

//注意
console.log(typeof(Function.prototype));      //function
console.log(typeof(Object.prototype));     //object
