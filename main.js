//Ejemplo 1

const Person = function(name, birthYear, job){
    this.name=name;
    this.birthYear=birthYear;
    this.job=job;
}

let john=new Person('John', 1990, 'Developer');
let jane=new Person('Jane', 1975, 'Designer');
let mark=new Person('Mark', 1985, 'Teacher');

console.log(john, jane, mark)