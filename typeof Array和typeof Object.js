console.log(typeof Array);        //function
console.log(typeof Array());      //object

console.log(typeof Object);       //function
console.log(typeof Object());     //object

console.log(typeof []);           //object

/**
 * 说明：Array和Object本身是js内建的构造函数，当它在调用或初始化的时候，才会
 *      生成对象。   
 *      构造函数，不实例化，只是个函数
 */