
//The Object class in JavaScript provides utility methods to manipulate objects. 
// These methods help with copying, locking, and inspecting object properties.

// Object.assign(target, source)
const user = { name: 'Alice' };
const updates = { age: 25 };
console.log(Object.assign(user, updates)); // user={ name: 'Alice', age: 25 }

// Object.freeze()
const obj = { city: 'Chennai' };
//console.log(Object.freeze(obj));
obj.city = 'Delhi'; // No change, object is frozen
console.log(Object.freeze(obj));

// Object.seal()
const sealedObj = { status: 'active' };
//console.log(Object.seal(sealedObj));
sealedObj.status = 'inactive'; //  Allowed
sealedObj.newKey = 'value';    // Not allowed
console.log(Object.seal(sealedObj));


// Object.keys(), values(), entries()
const person = { name: 'John', age: 30 ,id :1};
console.log(Object.keys(person));   // ['name', 'age']
console.log(Object.values(person)); // ['John', 30]
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]
//const person = { id:1};

// Object.hasOwnProperty()
console.log(person.hasOwnProperty('age')); // true
console.log(person.hasOwnProperty('contact')); //false


