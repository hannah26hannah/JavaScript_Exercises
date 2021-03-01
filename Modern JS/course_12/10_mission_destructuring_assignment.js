// 📜 Tasks 1 
let user = {
    name: "Bora",
    years: 30
}

let {name, years: age, isAdmin = false} = user;
console.log(name); // Bora
console.log(age); // 30
console.log(isAdmin); // false

// 📜 Tasks 2 The maximal salary
/**1. Create the function topSalary(salaries) that returns the name of the top-paid person. 
 * 2. If salaries is empty, it should return null
 * 3. If there are multiple top-paid persons, return any of them.
 * 4. Use Object.entries and destructuring to iterate over key/value pairs.
 */
let salaries = {
    "John": 100,
    "Suna": 300,
    "Pete": 300,
    "Mary": 250,
}

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));
