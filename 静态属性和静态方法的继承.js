/**
 * ES5和ES6中静态方法的继承 
 * 1.ES5的继承：子类是无法继承父类的静态属性和静态方法。注意：静态方法没办法获取到
 *   this，由于js中的类也是一个对象，静态方法相当于类对象的属性方法，this指向的是当
 *   前实例而不是类对象，所以无法获取到
 * 2.ES6中的继承：ES6中的静态方法和静态属性都可以被继承下来
 */

//ES5

// // 定义父类
// function Super(name,age){
//     this.name=name;
//     this.age=age;
// }
// Super.prototype.sayName=function(){
//     return this.name;
// }
// // 定义属性
// Super.num=1;
// // 定义静态属性
// Super.sayWord=function(word){
//     return word;
// }

// // 定义子类
// function Sub(name,age,sex){
//     Super.call(this,name,age);
//     this.sex=sex;
// }
// Sub.prototype=Object.create(Super.prototype);
// Sub.prototype.constructor=Sub;

// var instance = new Sub('张三', '18', '男');

// console.log(Super.sayWord('hello world'));   //hello world
// console.log(Sub.sayWord('hello world'));     //Sub.sayWord is not a function
// console.log(instance.sayWord('hello world'));   //instance.sayWord is not a function


//ES6
class Super{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayName(){
        return this.name;
    }
    static sayWord(word){
        return word;
    }
    static get num(){
        return this._num;
    }
    static set num(n){
        this._num=n;
    }
}

class Sub extends Super{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
    }
}
const instance=new Sub('张三','18','男')

console.log(Super.sayWord('hello world'));   //hello world
console.log(Sub.sayWord('hello world'));     //hello world
console.log(instance.sayWord('hello world'));   //instance.sayWord is not a function
