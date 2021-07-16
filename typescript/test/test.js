var greeter = function (person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};
var user = { firstName: "Jone", lastName: "user" };
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var std = new Student("Jane", "M", 'user');
console.log(std);
var color = "blue";
color = 'red';
var testname = color + "shibal";
console.log(testname);
var list = [1, 2, 3];
var list2 = [3, 4, 5];
var x;
x = ['hello', 10];
console.log(x[0].substring(3));
var testColor;
(function (testColor) {
    testColor[testColor["RED"] = 0] = "RED";
    testColor[testColor["GREEN"] = 1] = "GREEN";
    testColor[testColor["BLUE"] = 2] = "BLUE";
})(testColor || (testColor = {}));
console.log(testColor.RED);
