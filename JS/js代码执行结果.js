function Foo(){
    getName=function(){
        console.log(1);
    }
    return this;
}
Foo.getName=function(){
    console.log(2);
}
Foo.prototype.getName=function(){
    console.log(3);
}
var getName=function(){
    console.log(4);
}
function getName(){
    console.log(5);
}
Foo.getName();   // 2
getName();// 4
Foo().getName();// 1
getName();// 1
new Foo.getName();  // 2  new后面的函数没有参数的时候，从右到左执行  new function(){console.log(2)}
new Foo().getName(); // 3  new后面的函数有参数的时候，从左到右执行  new function(){console.log(3)}
new new Foo().getName(); // 3