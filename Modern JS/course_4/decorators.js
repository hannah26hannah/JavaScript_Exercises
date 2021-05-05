// Decorators

/**
 *  JavaScript gives exceptional flexibility when dealing with functions. They can be
 * 1 passed around,
 * 2 used as objects,
 * 3 can forward calls between them
 * 4 and decorate them.
 */


/** Transparent caching
 * 
 * Let's say we have a function slow(x) which is CPU-heavy, but its results are stable. If the function is called often, we may want to cache the results to avoid spending extra-time on recalculations. 
 * But instead of adding that functionality into slow() we'll create a wrapper function, that adds caching to get more benefits   */

function slow(x) {
	console.log(`Called with ${x}`)
	return x;
}

function cachingDecorator(func) {
	let cache = new Map();
	return function (x) {
		if (cache.has(x)) { // if there's such key in cache
			return cache.get(x) // read the result from it
		}
		let result = func(x);
		cache.set(x, result); // and cache the result
		return result;
	}
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached and the result returned
console.log('again' + slow(1)); // slow(1) result returned from cache
console.log(slow(2)); // slow(2) is cached and ther result returned
console.log('again', slow(2)); // slow(2) result returned from cache


/**
 *  cachingDecorator is a decorator. A special function that takes another function and alters its behavior. 
 * The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. 
 * By separating caching from the main function code we also keep the main code simpler.
 * The result of cachingDecorator(func) is a 'wrapper'. function(x) that 'wraps' the call of func(x) into caching logic
 * 
 * There are several benefits of using a separate cachingDecorator instead of altering the code of slow itself.
 * 
 * - The cachingDecorator is reusable. We can apply it to another function
 * - The caching logic is separate, it did not increase the complexity of slow itself.
 * - We can combine multiple decorators if needed. 
 */



