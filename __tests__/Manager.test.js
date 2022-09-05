const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);

    expect(manager.name).toBe('ManagerName');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('testmanager@fakemail.com');

    expect(manager.officeNumber).toBe(100);
});

test("gets manager's name", () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);
  
    expect(manager.getName()).toEqual('ManagerName');
});

test("gets manager's id", () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);
  
    expect(manager.getId()).toEqual(2);
});

test("gets manager's email", () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);
  
    expect(manager.getEmail()).toEqual('testmanager@fakemail.com');
});

test("gets manager's office number", () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);

    expect(manager.getOfficeNumber()).toEqual(100);
});

test("gets manager's role", () => {
    const manager = new Manager('ManagerName', 2, 'testmanager@fakemail.com', 100);
  
    expect(manager.getRole()).toEqual('Manager');
});