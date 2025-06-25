//**Common Methods**
const str = "Hello world! Hello JavaScript!";

//test()
console.log(/Hello/.test(str)); // true

// exec()
console.log(/Hello/.exec(str)); // ["Hello"]

// match()
console.log(str.match(/Hello/g)); // ["Hello", "Hello"]


// **Flags**
const text = "Ball bat";

// g - global
console.log(text.match(/cat/g)); // ["bat"]

// i - case insensitive
console.log(text.match(/cat/i)); // ["Ball"]

// gi - global + case insensitive
console.log(text.match(/cat/gi)); // ["Ball", "bat"]


//**Basic Patterns**
const input = "abc123 XYZ";

// . - any character
console.log(/.bc/.test("abc")); // true

// \d - digit
console.log(/\d/.test(input)); // true

// \D - non-digit
console.log(/\D/.test("123")); // false

// \w - word character
console.log(/\w/.test("_")); // true

// \W - non-word character
console.log(/\W/.test("!")); // true

// \s - whitespace
console.log(/\s/.test(" ")); // true

// \S - non-whitespace
console.log(/\S/.test("a")); // true

// ^ - start of string
console.log(/^abc/.test("abc123")); // true

// $ - end of string
console.log(/123$/.test("abc123")); // true

// [...] - character set
console.log(/[aeiou]/.test("cat")); // true

// [^...] - negated set
console.log(/[^aeiou]/.test("aeiou")); // false

// a|b - or
console.log(/cat|dog/.test("I have a dog")); // true


