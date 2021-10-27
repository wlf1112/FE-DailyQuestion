/**
 * 可以通过在类的内部写一个实例化方法，用static暴露
 */
class MyLocalStorage{
    static localStorage=new MyLocalStorage()
    constructor(){
        console.log(111,'我已经被调用了');
    }
    getItem(){
        console.log(111);
    }
}

MyLocalStorage.localStorage.getItem()
MyLocalStorage.localStorage.getItem()

/**
 * 总结：
 * 1.静态属性在创建类的时候会被分配内存空间，和类的实例对象无关
 * 2.如果把上面代码中的static去掉，代码不会执行。只有等实例对象调用的时候才会执行
 * 3.静态属性这样写，其实是创建了单例模式。就算一直调用静态属性，访问的还是同一个类的实例对象
 */