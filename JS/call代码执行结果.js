Function.prototype.call=function(context,...args){ //context->fn2  
    context=context||window;
    let fn=Symbol();
    context.fn=this;  // this->call  fn2.fn=call
    let result=context.fn(...args); // fn2.fn -> fn2.call() ->fn2.call(window) -> window.fn2
    delete context.fn;
    return result; 
}

function fn1(){console.log(1)}
function fn2(){console.log(2)}
fn1.call.call(fn2); // 2

// 解析：
// 1. fn1.call=Function.prototype.call
// 2. fn1.call.call(fn2) ->  call.call(fn2)
