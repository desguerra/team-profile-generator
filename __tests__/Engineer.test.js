const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');

    expect(engineer.name).toBe('TestName');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('testengineer@fakemail.com');

    expect(engineer.github).toBe('octocat');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');
  
    expect(engineer.getName()).toEqual('TestName');
});

test("gets engineer's id", () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');
  
    expect(engineer.getId()).toEqual('2');
});

test("gets engineer's email", () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');
  
    expect(engineer.getEmail()).toEqual('testengineer@fakemail.com');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');
  
    expect(engineer.getGithub()).toEqual('octocat');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');
  
    expect(engineer.getRole()).toEqual('Engineer');
});