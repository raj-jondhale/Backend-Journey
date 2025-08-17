//factory function

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi,My name is ${this.name}`);
//         }
//     };
//     return person;
// }

// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 25);

//constructor - doesn't return anything & start with capital

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Adam", 25);
// let p2 = new Person("eve", 25);

//classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}


let p1 = new Person("Adam", 25, 90);
let p2 = new Person("eve", 25, 95);
