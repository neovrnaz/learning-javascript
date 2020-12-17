function Employee() {}
function foo() {}

var emp = new Employee();
emp.prop = 'Employee';
emp.__proto__.parentProp = 'Parent of employee';
Object.prototype.grandParentProp = 'Grandparent of Object';

console.log(Object.grandParentProp);
console.log(foo.grandParentProp);
