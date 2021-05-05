// call(), apply()

/**
 *  Using 'func.call' for the context 
 */

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined

/**
 *  The error occurs in the line (*) that tries to access this.someMethod and fails. 
 * The reason is that the wrapper calls the original function as func(x) in the line (**). And, when called like that, the function gets this = undfined.
 * 
 * So, the wrapper passes the call to the original method, but wihtout the context, this. Hence the error. 
 */

/**
 * There's a special built-in function method func.call(context, ...args) that allows to call a function explicitly setting this. 
 * 
 * func.call(context, arg1, arg2, ...)
 * It runs func providing the first argument as this, and the next as the arguments. 
 */

function sayHi() {
  console.log(this.name)
}
let user = { name: 'Hannah' }
let admin = { name: 'Admin' }

sayHi.call(user); // hannah
sayHi.call(admin); // admin

function say() {
  
}