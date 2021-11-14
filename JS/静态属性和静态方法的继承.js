/**
 * ES5和ES6中静态方法的继承 
 * 1.ES5的继承：子类是无法继承父类的静态属性和静态方法。注意：静态方法没办法获取到
 *   this，由于js中的类也是一个对象，静态方法相当于类对象的属性方法，this指向的是当
 *   前实例而不是类对象，所以无法获取到
 * 2.ES6中的继承：ES6中的静态方法和静态属性都可以被继承下来
 */

// ES6
class Father{
    static staticFatherName='FatherName';
    static staticGetFatherName=function(){
        console.log(Father.staticFatherName);
    }
    constructor(name){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
}

class Child extends Father{
    static staticChildName='ChildName';
    static staticGetChildName=function(){
        console.log(Child.staticChildName);
    }
    constructor(name,age){
        super(name)
        this.age=age;
    }
    getAge(){
        console.log(this.age);
    }
}

let child=new Child('xiaowang',18);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();

// ES5
function _extends(Child,Father){
    Child.__proto__=Father;//继承静态属性和静态方法
    function Temp(){
        this.constructor=Child;
    }
    Temp.prototype=Father.prototype;
    Child.prototype=new Temp();

function Father(name){
    this.name=name;
}
Father.prototype.getName=function(){
    console.log(this.name);
}
Father.staticFatherName='FatherName';
Father.staticGetFatherName=function(){
    console.log(Father.staticFatherName);
}

function Child(name,age){
    Father.call(this,name);
    this.age=age;
}
_extends(Child,Father);
Child.prototype.getAge=function(){
    console.log(this.age);
}
Child.staticChildName='ChildName';
Child.staticGetChildName=function(){
    console.log(Child.staticChildName);
}

let child=new Child('xiaowang',18);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();