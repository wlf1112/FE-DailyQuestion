/**
 * 总结：
 * 1.不可以使用super直接访问父类的属性
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`${this.name} say hello`);
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.name = name;
    }
    teach() {
        //使用super访问父类的属性
        console.log(super.name);
    }
}

let s = new Student('john');
s.teach();