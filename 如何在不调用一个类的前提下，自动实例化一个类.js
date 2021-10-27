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
 * 2.如果把上面代码中的static去掉，代码不会执行。
 */