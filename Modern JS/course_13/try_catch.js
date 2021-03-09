// There's a syntax construct try .. catch that allows us to 'catch' errors so the script can, instead of dying, do something more reasonable.

// 1. The 'try ... catch' syntax

function test(value) {
    if (value !== undefined && value !== null) {
        return value
    } else {
        throw 'value is not valid'
    }   
} 

try {
    // code handling
    console.log(test());
} catch(err) {
    // error handling
    console.log(err)
}

/**
 * 1. First the code in try block is executed
 * 2. If there were no errors, then catch(err) is ignored: the execution reaches the end of try and goes on, skipping catch
 * 3. If an error occurs, then the try execution is topped, and control flows to the beginning of catch(err). The err variable will contain an error object with details about what happend.
 * 
 * But This try .. catch only works for runtime errors, which means this try .. catch syntax can only handle errors that occur in valid code. Such errors are called 'runtime errors', or sometimes 'exceptions'
 * 
 */

// Try .. catch works synchronously

try {
    setTimeout(function() {
        console.log('Haha')
        // noSuchVariable; // script will die here and prints ReferenceError: noSuchVariable is not defined
    }, 1000)
} catch (e) {
    console.log('won\'t work')
}


// This is because the function itself is executed later, when the engine has already left the try ... catch construct. To catch an exception inside a scheduled function try .. catch must be inside that function:

setTimeout(function() {
    try {
        noSuchVariable;
    } catch(e) {
        console.log('error is now caught')
    }
}, 1000);

/**
 * 2. Error Object
 * - name: Error Name
 * - message : Textual message about error details
 * - stack : current call stack. 
 */


/**
 * 3. Optional 'catch' binding --> recent addition (too soon!)
 * if we don't need error details, catch may omit it. 
 * try { } catch {}
 */


/**4. Real-life Error Handling (JSON) 
 * 
 * If json is malformed, JSON.parse generates an error, so script 'dies'
*/

let json = '{ bad json}';

try { 
    json.parse(json);
} catch (err) {
    console.log('the data has the errors, we\'ll try to request it one more time')
    
}

/**5. Throwing our own errors 
 * 
 * What if json is syntatically correct, but does't have a required name property?
 */

let newJson = '{ "age" : 26 }'; // incomplete data

try {
    let user = JSON.parse(newJson); // no errors 
    if (!user.name) {
        throw new SyntaxError('Incomplete data : no name')
    }
    console.log(user.name)
} catch(err) {
    console.log('JSON ERROR', err.message);
    // JSON ERROR Incomplete data : no name
}

/**6. rethrowing 
 * It's possible that another unexpected error occurs within the try block. 
 * Rethrowing technique 
 * 1. catch gets all erros
 * 2. In the catch(err) block we analyze the error object err. 
 * 3. if we don't know how to handle it, we do throw err
 * 3-1. we can also get the error class name from err.name property. All native errors have it. Another option is to read err.contructor.name;
 * 
 */

console.log('--------------------');

try {
    anothernoSuchVariable
 } catch(err) {
     if (err instanceof ReferenceError) {
        console.log('ReferenceError')
     }
 }

 console.log('-------------2')

 try {
     let user_user = JSON.parse(newJson);
     if (!user_user.name) {
         throw new SyntaxError('this is incomplate data')
     }
     blah(); // unexpected error
     console.log(user_user.name);
 } catch (err) {
    if (err instanceof SyntaxError) {
        console.log('JSON ERROR', err.message)
    } else {
        throw err; // rethrowing 
    }
 }

 // This can be handled by like below:

console.log('========================')

function readData() {
    let json = '{ "age" : 30 }'

    try {
        // ...
        isNotPossibleFunc(); // error
    } catch(e) {
        if (!(e instanceof SyntaxError)) {
            throw e; // rethrowing error - don't know how to handle it yet
        }
    } 
}

try {
    readData();
} catch(e) {
    console.log('external catch get', e); 
}
// external catch get ReferenceError: isNotPossibleFunc is not defined

/**7. try catch finally 
 * This code block executes always
 * 
 * 7-1. finally and return
 * 
 * The finally clause works for any exit from try .. catch that includes an explicit return
 * In the example below, there's a return in try. In this case, finally is executed just before the contol returns to the outer code.
*/

function func() {
    try {
        return 1;
    } catch(e) {
        console.log(e)
    } finally {
        console.log('finally')
    }
}

console.log(func());

// finally
// 1

// In this case, finally executed just before the control returns to the outer code


// 8. Global Catch
/** This is Environment-specific
 * This is not provided from the specification, but environments usually provide it. For instance, Node.js has process.on('uncaughtException') for this. And in the browser we can assign a function to the special window.onerror propert, that will run in case of an uncaught error
 */

window.onerror = function(msg, url, line, col, error) {
    // ... 
}

/** 
 * - mssage:  Error msg
 * - url : URL of the script where error happened
 * line, col : Line and column numbers where error happened.
 * error : Error object 
 * 
 * They work like this:

    We register at the service and get a piece of JS (or a script URL) from them to insert on pages.
    That JS script sets a custom window.onerror function.
    When an error occurs, it sends a network request about it to the service.
    We can log in to the service web interface and see errors.

 * */