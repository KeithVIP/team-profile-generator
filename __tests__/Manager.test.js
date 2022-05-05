const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Keith', 57, 'keithvip@gmail.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get job of team member', () => {
    const manager = new Manager('Keith', 57, 'keithvip@gmail.com', 5);
    expect(manager.getJob()).toEqual("Manager");
});


