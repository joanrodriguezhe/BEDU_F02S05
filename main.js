//Ejemplo 1

const Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

let john = new Person('John', 1990, 'Developer');
let jane = new Person('Jane', 1975, 'Designer');
let mark = new Person('Mark', 1985, 'Teacher');

/* console.log(john);
console.log(jane);
console.log(mark); */


//Reto 1
var Vec = function (x, y) {
    this.x = x;
    this.y = y;
}

Vec.prototype.plus = function (vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
}
Vec.prototype.minus = function (vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
}

Vec.prototype.length = function () {
    return (this.x ** 2 + this.y ** 2) ** .5;
}

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

/* console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
 */

//Ejemplo 2

const Persona = function (name) {
    this.name = name;
}

const Developer = function (name, skills, yearsOfExperience) {
    Persona.call(this, name);
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

//console.log(new Developer('John Doe', 'JavaScript', 10));

//Reto 02

var Group = function () {
    this.members = [];
}

Group.from = function (array) {
    var group = new Group();
    group.members = [...new Set(array)];
    return group;
}

Group.prototype.has = function (number) {
    return this.members.includes(number);
}

Group.prototype.add = function (number) {
    (!this.has(number)) ? this.members.push(number) : null;
}

/* var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
group.add(10);
console.log(group.has(10)); // true */


//Reto 03

var Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function () {
    return (this.a + this.b + this.c);
}

var triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6