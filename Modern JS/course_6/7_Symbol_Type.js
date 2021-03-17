/** Symbol Type
 *
 * object property keys may be either of string type, of of symbol type
 * Not Numbers
 * Not booleans
 *
 * 1. Symbols
 * represents a unique identifier
 * A value of this type can be created using Symbol():
 */

let id = Symbol();
console.log(typeof id); // symbol

// Upon Creation, we can give symbol a description (symbol name), mostly useful for debuggin purpose:
id = Symbol("id");

// Even if we create many symbols with the same description, Symbols are guaranteed to be unique. They are different values. The description is just a label that doesn't affect anything.

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false

/* 📜 Symbol don't auto-convert to a string 

Most values in JavaScript support implicit conversion to a string. */
let id3 = Symbol("id");
console.log(id3, typeof id3); // Symbol(id) symbol, it's not a string value
console.log(id3.toString(), typeof id3.toString()); // Symbol(id) string, now it works.
console.log(id3.description); // id, this property show the description only

/*  2. Hidden Properties 

Symbol allow us to create 'hidden' properties of an object, that no other part of code can accidentally access or overwrite. For instance, if we're working with user objects, that belong to a third-party code. We'd like to add identifier to them. */

let user = {
  // this belongs to another
  name: "Hannah",
};

let id4 = Symbol("id");
user[id4] = 1;
console.log(user[id4]); // 1, we can access the data using the symbol as the key

/* The benefit : As user objects belong to another code, and that code also works with them, we shouldn't just add any fields to it. That's unsafe. But a symbol cannot be accessed accidentally, this third-party code probably won't even see it.  */

/* 3. Symbols in an object literal 

if we want to use a symbol in an object literal, we need square brackets around it */

let id5 = Symbol("id");
let user2 = {
  name: "Hannah",
  [id5]: 123,
};

/* 4. Symbols are skipped by for ... in */

let id6 = Symbol("id");
let user3 = {
  name: "Hannah",
  age: 28,
  [id6]: 123,
};
console.log("See the loop ---- ");
for (let key in user3) console.log(key); // name, age (no symbols)
console.log("but the direct access by the symbol works", user3[id6]); // 123

/* Object.keys(user) also ignores them. 
BUT In Contrast, Object.assign copies both string and symbol properties */

let id7 = Symbol("id");
let user4 = {
  [id7]: 123,
};
let clone = Object.assign({}, user4);
console.log("See the clone's rsult", clone[id7]); // 123

/* 5. Global Symbols

Sometimes we want same Symbol which has same name. To achieve this, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by he same name return exactly the same symbol. 

Create -> 
React a symbol from the registry using Symbol.for(key) -> 
This call checks the global registry ->
If there's a symbol described as key then returns it ->
Otherwise creates a new symbol Symbol(key) ->
and stores it in the registry by the given key */

let symbol_id = Symbol.for("id"); // if the symbol did not exist, it is created at this moment

let symbol_id_again = Symbol.for("id"); // Read it again

console.log(symbol_id === symbol_id_again); // true

// In Ruby, There's a single symbol per name

// 6. Symbol.KeyFor
/* reverse call : Symbol.KeyFor(sym) returns a name by a global symbol */

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// if it's not global symbole, this will return undefined

// 7. System symbol (Symbol.toPrimitive, Symbol.iterator... )

// example

let lib = {
  name: "ABC",
};

lib["id"] = 5;
lib["id"] = 6; // The value is changed because it is String [KEY]!!

lib[Symbol("id")] = 123;
lib[Symbol("id")] = 124; //Not changed

console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }
