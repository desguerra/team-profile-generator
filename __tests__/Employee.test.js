const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('TestEmp', 4, 'testemp@fakemail.com');

    expect(employee.name).toBe('TestEmp');
    expect(employee.id).toBe(4);
    expect(employee.email).toBe('testemp@fakemail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('TestEmp', 4, 'testemp@fakemail.com');
  
    expect(employee.getName()).toEqual('TestEmp');
});

test("gets employee's id", () => {
    const employee = new Employee('TestEmp', 4, 'testemp@fakemail.com');
  
    expect(employee.getId()).toEqual(4);
});

test("gets employee's email", () => {
    const employee = new Employee('TestEmp', 4, 'testemp@fakemail.com');
  
    expect(employee.getEmail()).toEqual('testemp@fakemail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('TestEmp', 4, 'testemp@fakemail.com');
  
    expect(employee.getRole()).toEqual('Employee');
});