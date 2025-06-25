**What is a Regular Expression?**
      A Regular Expression (Regex) is a pattern used to match strings or parts of strings — like emails, 
 phone numbers, passwords, etc.

    Example                          Use Cases of Regex

    Use Case	                      What Regex Checks For
  Email validation          Checks if it looks like name@email.com
  Phone number check     	Only digits, or starts with country code
  Password validation	    Minimum length, includes special characters
  Search in a sentence	       Find a specific word or pattern

1. **Match an Email**

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
Checks for a valid email structure like john@example.com.

2. **Password – Minimum 8 chars, includes 1 number**

const passRegex = /^(?=.*\d).{8,}$/;

Makes sure the password:
is at least 8 characters long and has at least one digit

3. **Only Numbers (Phone or Age)**

const numberRegex = /^[0-9]+$/;
Matches strings that contain only digits.

 4. **Match a Word in Text**

const text = "Dark truth videos are viral!";
const regex = /viral/;
console.log(regex.test(text)); // true

 