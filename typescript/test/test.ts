interface Person{
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jone", lastName: "user"};

console.log(greeter(user));

class Student{
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

let std = new Student("Jane", "M", 'user');

console.log(std);

let color: string = "blue";
color = 'red';

let testname = `${color}shibal`;
console.log(testname);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [3, 4, 5];

let x: [string, number];
x = ['hello', 10];


console.log(x[0].substring(3))

enum testColor{
  RED,
  GREEN,
  BLUE,
}

console.log(testColor.RED)

