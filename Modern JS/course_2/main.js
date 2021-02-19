'use strict';

// let globalName = 'global Name';

// {
//     let name = 'hannah';
//     console.log(name);
//     name = 'hi';
//     console.log(name);
//     console.log(globalName);
// }
//     console.log(name);
//     console.log(globalName);

//     console.log(age);
//     age = 4;
//     console.log(age);
//     var age;

//     name = 4;
//     let name;

    const bigInt = 454643456789123456789123456789123456789n; 
    // over (-2**53) ~ (2*53)
    console.log(`value: ${bigInt}, type:${typeof bigInt}`);

    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello' + brendan;

    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`; // template Literals (string)
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);