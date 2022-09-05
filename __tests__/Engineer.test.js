const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('TestName', '2', 'testengineer@fakemail.com', 'octocat');

    expect(engineer.name).toBe('TestName');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toEqual('testengineer@fakemail.com');

    expect(engineer.github).toEqual('octocat');
});