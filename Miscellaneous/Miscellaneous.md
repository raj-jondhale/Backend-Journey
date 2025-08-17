# Miscellaneous

## Get & Post Requests

| GET                                                                 | POST                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------ |
| > Used to GET some response                                         | > Used to POST something (for Createl Writel Update) . |
| >Data sent in query strings (limited, string data & visible in URL) | > Data sent via request body (any type of data)        |

## Handling Post requests

- Set up POST request route to get some response
- Parse POST request data

```js
//index.js
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  let { user, pass } = req.body;
  res.send(`standard POST response. Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
```

## OOP

### Object Oriented Programming

To structure our code

- prototypes
- New Operator
- constructors
- classes
- keywords (extends, super)

### Object Prototypes

- Prototypes are the mechanism by which JavaScript objects inherit features from one another.
- It is like a single template object that all objects inherit methods and properties from without having their own copy.

```js
arr._proto_ (reference)
Array.prototype (actual object)
String.prototype
```

### Fsctory functions

function that creats objects

```js
//factory function

function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi,My name is ${this.name}`);
    },
  };
  return person;
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 25);
```

### New operator

- The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

```js
//constructor - doesn't return anything & start with capital

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Adam", 25);
let p2 = new Person("eve", 25);
```

### Classes

- Classes are a template for creating objects
- The constructor method is a special method of a class for creating and initializing an object instance of that class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

let p1 = new Person("Adam", 25);
let p2 = new Person("eve", 25);
```

### Inheritance

- Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

```js
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}
```
