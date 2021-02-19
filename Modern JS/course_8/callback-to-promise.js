// Ellie's solution

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password == 'dream') ||
                    (id === 'coder' && password == 'academy')               
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000)})
    }
}

const userStorage = new UserStorage(); 
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => {alert(`Hello ${user.name}, you have a ${user.role} role`)})
.catch(console.log);


/*
const userStorage = new Promise((resolve, reject) => {
    setTimeout((id, password) => {
        resolve(id, password)
    }, 2000)
});

const checkId = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(id), 1000);
    })};
const checkPW = (id) => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(password), 1000);
    })};

userStorage
.then(id)
.catch(error => {
    return console.log('id was wrong');
})
.then(password)
.catch(error => {
    return console.log('password was wrong');
})
.finally(() => {
    return console.log('you can login now');
})
*/
