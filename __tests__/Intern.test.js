const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Keith', 57, 'keithvip@gmail.com', 'TWU');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets team member school', () => {
    const intern = new Intern('Keith', 57, 'keithvip@gmail.com', 'TWU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets job of team member', () => {
    const intern = new Intern('Keith', 57, 'keithvip@gmail.com', 'TWU');
    expect(intern.getJob()).toEqual("Intern");
});