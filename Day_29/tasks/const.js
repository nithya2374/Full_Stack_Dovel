// yes,it can be changed..
//In JavaScript, the keyword const means that the variable binding (reference) cannot be reassigned.
//  However, it does not make the contents of the object immutable.

//This means:
//You cannot reassign the object itself.
//You can modify its properties or fields.

//Example:

const user = {
  name: 'Alice',
  age: 25
};

// Allowed: Changing a property
user.age = 30;

console.log(user.age); // Output: 30

// Not Allowed: Reassigning the whole object
//user = { name: 'Bob' }; // TypeError: Assignment to constant variable

// What If You Want to Make It Completely Immutable
//Use Object.freeze() to prevent any changes:


const config = {
  theme: 'dark'
};
Object.freeze(config);
config.theme = 'light'; // No change
console.log(config.theme); // Output: 'dark'

// Example:
//In an app, you might want to keep a constant reference to your config object
 //but still update user preferences dynamically:


const settings = {
  language: 'en',
  notifications: true
};

console.log(settings.language = 'fr');       // Works
console.log(settings.notifications = false); // Works









