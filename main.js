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
    return (this.x ** 2 + this.y ** 2)**.5;
}

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979