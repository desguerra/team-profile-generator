const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');

    expect(intern.name).toBe('IntName');
    expect(intern.id).toBe(5);
    expect(intern.email).toBe('testint@fakemail.com');

    expect(intern.school).toBe('UCD');
});

test("gets intern's name", () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');
  
    expect(intern.getName()).toEqual('IntName');
});

test("gets intern's id", () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');
  
    expect(intern.getId()).toEqual(5);
});

test("gets intern's email", () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');
  
    expect(intern.getEmail()).toEqual('testint@fakemail.com');
});

test("gets intern's school", () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');
  
    expect(intern.getSchool()).toEqual('UCD');
});

test("gets intern's role", () => {
    const intern = new Intern('IntName', 5, 'testint@fakemail.com', 'UCD');
  
    expect(intern.getRole()).toEqual('Intern');
});