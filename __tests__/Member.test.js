const Member = require('../lib/Member');

test('creates a team member object', () => {
    const member = new Member('Keith', 57, 'keithvip@gmail.com');
    expect(member.name).toEqual(expect.any(String));
    expect(member.id).toEqual(expect.any(Number));
    expect(member.email).toEqual(expect.any(String));
});

test('gets team member name', () => {
    const member = new Member('Keith', 57, 'keithvip@gmail.com');
    expect(member.getName()).toEqual(expect.any(String));

});

test('gets team member ID', () => {
    const member = new Member('Keith', 57, 'keithvip@gmail.com');
    expect(member.getID()).toEqual(expect.any(Number));

});

test('gets team member email', () => {
    const member = new Member('Keith', 57, 'keithvip@gmail.com', 'TWU', 5);
    expect(member.getEmail()).toEqual(expect.stringContaining(member.email.toString()));

});


test('gets job of team member', () => {
    const member = new Member('Keith', 57, 'keithvip@gmail.com', 'TWU', 5);
    expect(member.getJob()).toEqual("Member");


});

