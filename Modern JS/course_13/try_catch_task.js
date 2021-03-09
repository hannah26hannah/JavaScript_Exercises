// Task 1 : Finally or just the code? compate the two code fragments. 

// 1. The firs one uses finally to execute the code after try .. catch
try {
    work work 
} catch (e) {
    handle errors
} finally {
    clearnup the working space
}

// 2. The second fragment puts the cleaning right after try .. catch
try {
    work work
} catch(e) {
    handling errors
}

clearup the working space

/**
 * try catch finally 구문 안에 clearup을 넣는 게 항상 좋다고 생각한다. 에러가 있든 없든 코드가 일관성이 보장되기 때문이리라.
 * 성능상의 문제는 별 차이가 없다고 생각된다. 하지만, try 구문 안에 return이 있을 경우에는 finally가 먼저 실행되기 때문에, 코드의 비동기성 때문에 flow가 엉킬 수도 있다고 생각된다. 이런 경우에는 finally 바깥에서 clearup을 해주는 것이 좋다고 생각된다. 
 * 
 */

/**
 * The behavior is different if there's a jumpt out of try .. catch
 * When there's a return inside try .. catch, The finally clause works in case of any exit from try.. catch, even via the return statement: right after try .. catch is done, but before calling code gets the control.
 * 
 */

function f() {
    try {
        console.log('start')
        return 'result';
    } catch(e) {
        //. .. 
    } finally {
        console.log('cleanup')
    }
}

f(); // cleanup

/**Or When there's a throw, like here: */

function f() {
    try {
        console.log('start')
        throw new Error('an Error')
    } catch(e) {
        if ('can not handle the error') {
            throw e;
        }

    } finally {
        console.log('cleanup')
    }
}

f(); // cleanup

// It's finally that guarantees the cleanup here. if we just put the code at the end of f, it wouldn't run in these situations