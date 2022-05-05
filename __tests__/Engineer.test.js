const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Keith', 57, 'keithvip@gmail.com', 'KeithVIP');
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Keith', 57, 'keithvip@gmail.com', 'KeithVIP');
    expect(engineer.getGit()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets job of team member', () => {
    const engineer = new Engineer('Keith', 57, 'keithvip@gmail.com', 'KeithVIP');
    expect(engineer.getJob()).toEqual("Engineer");
});