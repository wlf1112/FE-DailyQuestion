/**
 * 1.Object.create是创建一个以参数为__proto__的对象
 * 2.Object.setPrototypeOf是修改参数1的__proto__为参数2
 * 
 * 本质区别在于 对象的原型被覆盖还是增加指向
 * 
 * 总结：
 * 1.使用Object.create，Person.prototype将会指向一个空对象，空对象的原型属性指向Teacher的prototype。
 *   所以我们不能再访问Person的原有prototype中的属性。
 * 2.使用Object.setPrototypeOf则会将Person.prototype指向Person原有的prototype，然后这个prototype的
 *   prototype再指向Teacher的prototype。所以我们优先访问Person，然后再是Teacher
 */

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.say=function(){
    console.log(`${this.name} 今年 ${this.age} 岁了`);
}

let p1=new Person('xiaowang',12);

function Teacher(name){
    this.name=name;
    this.age=null;
}

Teacher.prototype.say=function(val){
    console.log(`${this.name}  今年 ${this.age} 岁了，他有 ${val} 个姐姐`);
}

// Object.create
// Person.prototype=Object.create(Teacher.prototype);
// console.log(Person.prototype);

// let p2=new Person('john',18);
// console.log(p1.say());
// console.log(p2.say(1));

// Object.setPrototypeOf
Object.setPrototypeOf(Person.prototype,Teacher.prototype)
console.log(Person.prototype);

let p2=new Person('john',18);
console.log(p1.say());
console.log(p2.say(1));