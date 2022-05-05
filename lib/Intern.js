const Member = require('./Member');

class Intern extends Member {
    constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
}   

getSchool () {
    return this.school;
}

getJob () {
    return "Intern";
}
}

module.exports = Intern;